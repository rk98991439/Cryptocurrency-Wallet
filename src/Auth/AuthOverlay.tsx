import React from "react";
import clsx from "clsx";
import styles from "./authOverlay.module.scss";

interface AuthOverlayProps {
  setpanel: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthOverlay = ({ setpanel }: AuthOverlayProps) => {
  return (
    <div className={styles.overlayContainer}>
      <div className={styles.overlay}>
        <div className={clsx(styles.overlayPanel, styles.overlayLeft)}>
          <h1 className={styles.overlayPanelHeader}>Welcome Back!</h1>
          <p className={styles.overlayPanelParagraph}>
            To keep connected with us please login with your personal info
          </p>
          <button className={clsx(styles.ghost, styles.btn)}>Login</button>
        </div>
        <div className={clsx(styles.overlayPanel, styles.overlayRight)}>
          <h1 className={styles.overlayPanelHeader}>Hello, Friend!</h1>
          <p className={styles.overlayPanelParagraph}>
            Enter your personal details and start journey with us!
          </p>
          <button
            className={clsx(styles.ghost, styles.btn)}
            onClick={() => setpanel(true)}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthOverlay;
