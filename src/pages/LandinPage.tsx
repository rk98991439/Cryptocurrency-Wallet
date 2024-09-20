import { Link } from "react-router-dom";

import styles from "./landingPage.module.scss";

const LandinPage = () => {
  return (
    <>
      <div className={styles.landingPage}>
        <h1 className={styles.title}>Welcome to the CryptoWallet</h1>

        <Link to="/auth">
          <button className={styles.authBtn}> AUTH </button>
        </Link>
      </div>
    </>
  );
};

export default LandinPage;
