import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; // necessary for zod to work with react-hook-form
import { z } from "zod";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import styles from "./SignIN.module.scss";

import { toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LineWave } from "react-loader-spinner";

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
    <div className="form-wrapper">
      <form noValidate className="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="form-title">LOGIN</h2>
        <input
          className="input input-email"
          type="email"
          id="email"
          placeholder="Email"
          {...register("username")}
        />
        {errors.username && (
          <p className="form-errors">{errors.username.message}</p>
        )}

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
          <button
            className="btn login-btn"
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
