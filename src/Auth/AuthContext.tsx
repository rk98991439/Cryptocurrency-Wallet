import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

//! toastify imports
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//! firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";

//! Defining the props type
interface AuthProviderProps {
  children: React.ReactNode;
}

//! Defining the user type

interface User {
  email: string;
  username: string;
}

//! Defining the context type
interface AuthContextType {
  signup: (data: {
    username: string;
    password: string;
    name: string;
  }) => Promise<void>;
  login: (data: { username: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  currentUser: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();

  const notifySuccess = (message: string) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  const notifyError = (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });

  //! SIGNUP
  const signup = async (data: {
    username: string;
    password: string;
    name: string;
  }) => {
    try {
      await createUserWithEmailAndPassword(auth, data.username, data.password);
      const user = auth.currentUser;
      console.log(user);

      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          username: data.name,
        });
      }
      notifySuccess(
        "Registration successful! You can now log in to your account."
      );

      console.log("User created successfully");
    } catch (error) {
      notifyError("Registration Failed");
      if (error instanceof Error) {
        console.log(error.message);
      } else {
        console.log(error);
      }
    }

    console.log(data.username);
    console.log("Password received");
  };

  //! LOGIN
  const login = async (data: { username: string; password: string }) => {
    try {
      await signInWithEmailAndPassword(auth, data.username, data.password);
      console.log("User logged in successfully");
      notifySuccess("Login Successfull");
      // Delay the navigation by 2.5 seconds to allow the toast to be displayed
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (error) {
      notifyError("Login Failed");
      console.log(error);
    }
  };

  //! Fetching Current user details

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = doc(db, "Users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          setCurrentUser(userSnap.data() as User);
        } else {
          console.log("User not found");
        }
      }
    });

    return () => unsubscribe();
  }, [location.pathname]);

  //! Logging out the Current USER

  const logout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
      notifySuccess("User logged out Successfully");
      console.log(" User logged out Successfully");
      // Delay the navigation by 2.5 seconds to allow the toast to be displayed
      setTimeout(() => {
        navigate("/auth");
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ signup, login, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
