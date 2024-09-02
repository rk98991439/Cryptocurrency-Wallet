import SignIn from "./SignIN";
import SignUp from "./SignUP";
import React from "react";

import styles from "./Auth.module.scss";

const Auth = () => {
  return (
    <>
      {/* <div className="container" id="container">

        
        <div className="form-container sign-up-container">
          <form action="#" method="POST">
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#" method="POST">
            <h1>Login</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button type="submit">Login</button>
          </form>
        </div>

        
      </div> */}

      <div className={styles.container}>
        <SignIn />
        <SignUp />
      </div>
    </>
  );
};

export default Auth;
