import { useState } from "react";
import clsx from "clsx";
import styles from "./Auth.module.scss";

const Auth = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signup form submitted");
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(styles.container, {
          [styles.rightPanelActive]: isRightPanelActive,
        })}
        id="container"
      >
        <div className={clsx(styles.formContainer, styles.signUpContainer)}>
          <form
            action="Signup.php"
            method="POST"
            onSubmit={handleSignupSubmit}
            className={styles.loginContainer}
          >
            <h1 className={styles.signupTitle}>Create Account</h1>
            <div className={styles.signUpSocialContainer}>
              <a href="#" className={styles.social}>
                <img src="./github.svg" alt="github-icon" />{" "}
              </a>
              <a href="#" className={styles.social}>
                <img src="./linkedin.svg" alt="github-icon" />{" "}
              </a>
              <a href="#" className={styles.social}>
                <img src="./twitter.svg" alt="github-icon" />{" "}
              </a>
            </div>
            <input
              className={styles.signinUserName}
              type="text"
              placeholder="Name"
            />
            <input
              className={styles.loginEmailInput}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.signUpPsswdInput}
              type="password"
              placeholder="Password"
            />
            <button className={styles.signUpBtn} type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <div className={clsx(styles.formContainer, styles.signInContainer)}>
          <form
            action="Login.php"
            method="POST"
            className={styles.loginContainer}
          >
            <h1 className={styles.loginTitle}>Login</h1>
            <div className={styles.socialContainer}>
              <a href="#" className={styles.social}>
                <img src="./github.svg" alt="github-icon" />{" "}
              </a>
              <a href="#" className={styles.social}>
                <img src="./linkedin.svg" alt="github-icon" />{" "}
              </a>
              <a href="#" className={styles.social}>
                <img src="./twitter.svg" alt="github-icon" />{" "}
              </a>
            </div>
            <input
              className={styles.loginEmailInput}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.loginPsswdInput}
              type="password"
              placeholder="Password"
            />
            <button type="submit" className={styles.loginBtn}>
              Login
            </button>
          </form>
        </div>

        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={clsx(styles.overlayPanel, styles.overlayLeft)}>
              <h1 className={styles.welcomeText}>Welcome Back!</h1>
              <p className={styles.welcomePara}>
                To keep connected with us please login with your personal info
              </p>
              <button
                className={styles.ghost}
                onClick={handleSignInClick}
                id="signIn"
              >
                Login
              </button>
            </div>
            <div className={clsx(styles.overlayPanel, styles.overlayRight)}>
              <h1 className={styles.welcomeText}> Hello, Friend!</h1>
              <p className={styles.welcomePara}>
                Enter your personal details and start journey with us
              </p>
              <button
                className={styles.ghost}
                onClick={handleSignUpClick}
                id="signUp"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
