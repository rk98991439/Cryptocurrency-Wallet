import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LineWave } from "react-loader-spinner";
import { useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import clsx from "clsx";
import "react-toastify/dist/ReactToastify.css";

import styles from "./SignUP.module.scss";

// Define the Zod schema
const signUpSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type T_SignUpFormData = z.infer<typeof signUpSchema>;

interface SignUpProps {
  panel: boolean;
}

const SignUp = ({panel}: SignUpProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeInputPassword, setActiveInputPassword] = useState(false);

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

  // const notifyError = (message: string) =>
  //   toast.error(message, {
  //     position: "top-right",
  //     autoClose: 2500,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "dark",
  //     transition: Bounce,
  //   });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<T_SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: T_SignUpFormData) => {
    notifySuccess("User created successfully");
    console.log(data);
  };

  return (
    <div className={clsx(styles.formWrapper  , styles.signUpFormWrapper , (panel ? styles.rightSignUpPanelActive : null))}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="psswd-input">
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            onChange={() => setActiveInputPassword(true)}
          />
          {activeInputPassword &&
            (showPassword ? (
              <img
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
                src="./eye.svg"
                alt="Hide password"
              />
            ) : (
              <img
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
                src="./eye-off.svg"
                alt="Show password"
              />
            ))}
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        {isSubmitting ? (
          <LineWave
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="line-wave-loading"
            wrapperStyle={{}}
            wrapperClass=""
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        ) : (
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        )}
      </form>
    </div>
  );
};

export default SignUp;
