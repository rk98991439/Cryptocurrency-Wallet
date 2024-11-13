import React, { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Firebase imports
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, getDoc, doc } from "firebase/firestore";

// Define types
interface AuthProviderProps {
  children: React.ReactNode;
}

interface User {
  email: string;
  username: string;
  publicKey: string;
}

interface AuthContextType {
  signup: (data: { username: string; password: string; name: string; publicKey: string }) => Promise<void>;
  login: (data: { username: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  currentUser: User | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Toast notifications
  const notifySuccess = (message: string) => toast.success(message, { position: "top-right", autoClose: 2500, hideProgressBar: false, theme: "dark", transition: Bounce });
  const notifyError = (message: string) => toast.error(message, { position: "top-right", autoClose: 2500, hideProgressBar: false, theme: "dark", transition: Bounce });

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

  const signup = async (data: { username: string; password: string; name: string; publicKey: string }) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, data.username, data.password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          username: data.name,
          publicKey: data.publicKey,
        });
      }
      notifySuccess("Registration successful! You can now log in.");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        notifyError(error.message);
      } else {
        notifyError("An error occurred during signup");
      }
    }
  };

  const login = async (data: { username: string; password: string }) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.username, data.password);
      notifySuccess("Login Successful");
      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        notifyError(error.message);
      } else {
        notifyError("An error occurred during login");
      }
    }
  };

  const logout = async () => {
    try {
      await auth.signOut();
      setCurrentUser(null);
      notifySuccess("User logged out successfully");
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
