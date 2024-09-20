import { useState, useContext } from "react";
import clsx from "clsx";
import styles from "./Auth.module.scss";

import { AuthContext } from "./AuthContext";

const Auth = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  //! states for signup form
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  //! states for login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  //! consuming the context

  const context = useContext(AuthContext);

  const { signup, login } = context!;

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //! handling the validation OF THE DATA coming from the form
    if (!signUpName || !signUpEmail || !signUpPassword) {
      alert("All fields are required.");
      return;
    }

    //! Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signUpEmail)) {
      alert("Invalid email format.");
      return;
    }

    //! calling the signup function from the context
    signup({
      username: signUpEmail,
      password: signUpPassword,
      name: signUpName,
    });

    //! clearing the form fields
    setSignUpName("");
    setSignUpEmail("");
    setSignUpPassword("");
  };

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //! handling the validation OF THE DATA coming from the form
    if (!loginEmail || !loginPassword) {
      alert("All fields are required.");
      return;
    }

    //! Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail)) {
      alert("Invalid email format.");
      return;
    }

    //! calling the login function from the context
    login({
      username: loginEmail,
      password: loginPassword,
    });

    //! clearing the form fields
    setLoginEmail("");
    setLoginPassword("");
  };

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
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
          <form onSubmit={handleSignupSubmit} className={styles.loginContainer}>
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
              value={signUpName}
              onChange={(e) => setSignUpName(e.target.value)}
            />
            <input
              className={styles.loginEmailInput}
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
            />
            <input
              className={styles.signUpPsswdInput}
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
            />
            <button className={styles.signUpBtn} type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <div className={clsx(styles.formContainer, styles.signInContainer)}>
          <form onSubmit={handleLoginSubmit} className={styles.loginContainer}>
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
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              className={styles.loginPsswdInput}
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
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
