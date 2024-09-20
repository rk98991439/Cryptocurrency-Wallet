import styles from "./home.module.scss";
import { useContext } from "react";

import { AuthContext } from "../Auth/AuthContext";

const Home = () => {
  const context = useContext(AuthContext);

  const { currentUser, logout } = context!;
  return (
    <div className={styles.homePage}>
      <h1 className={styles.greet}>
        Welcome <span>{currentUser?.username}</span> , to our WEBSITE.
      </h1>

      <button onClick={logout} className={styles.logoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default Home;
