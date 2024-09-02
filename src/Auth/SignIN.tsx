import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // necessary for zod to work with react-hook-form
import { z } from "zod";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import React from "react";
// import styles from "./SignIN.module.scss";

import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LineWave } from "react-loader-spinner";

import styles from "./SignIN.module.scss";
import clsx from "clsx";

const loginSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type T_loginSchema = z.infer<typeof loginSchema>;

const SignIn = () => {
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

  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<T_loginSchema>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: T_loginSchema) => {
    console.log(data);

    reset();
    notifySuccess("Login Successful");

    // Delay the navigation by 2.5 seconds to allow the toast to be displayed
    // setTimeout(() => {
    //   navigate("/home", { state: { data } });
    // }, 1500);
  };

  return (
    <div className={styles.formWrapper}>
      <form
        noValidate
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className={styles.formTitle}>LOGIN</h2>
        <input
          className={clsx(styles.input, styles.inputEmail)}
          type="email"
          id="email"
          placeholder="Email"
          {...register("username")}
        />
        {errors.username && (
          <p className={styles.formErrors}>{errors.username.message}</p>
        )}

        <div className={styles.psswdInput}>
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            onChange={() => setActiveInputPassword(true)}
          />
          {activeInputPassword &&
            (showPassword ? (
              <img
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
                src="./eye.svg"
                alt="Hide password"
              />
            ) : (
              <img
                className={styles.eyeIcon}
                onClick={() => setShowPassword(!showPassword)}
                src="./eye-off.svg"
                alt="Show password"
              />
            ))}
          {errors.password && (
            <p className={styles.formErrors}>{errors.password.message}</p>
          )}
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
          <button
            className={clsx(styles.btn, styles.loginBtn)}
            type="submit"
            disabled={isSubmitting}
          >
            Login
          </button>
        )}
      </form>
    </div>
  );
};

export default SignIn;
