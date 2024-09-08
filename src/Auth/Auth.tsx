import { useState } from 'react';
import clsx from 'clsx';
import styles from './Auth.module.scss';

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
    console.log('Signup form submitted');
  }

  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.container, { [styles.rightPanelActive]: isRightPanelActive })} id="container">
        <div className={clsx(styles.formContainer, styles.signUpContainer)}>
          <form action="Signup.php" method="POST" onSubmit={handleSignupSubmit}>
            <h1>Create Account</h1>
            <div className={styles.socialContainer}>
              <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <div className={clsx(styles.formContainer, styles.signInContainer)}>
          <form action="Login.php" method="POST">
            <h1>Login</h1>
            <div className={styles.socialContainer}>
              <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button type="submit">Login</button>
          </form>
        </div>

        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={clsx(styles.overlayPanel, styles.overlayLeft)}>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className={styles.ghost} onClick={handleSignInClick} id="signIn">Login</button>
            </div>
            <div className={clsx(styles.overlayPanel, styles.overlayRight)}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className={styles.ghost} onClick={handleSignUpClick} id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
