import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/crypto.svg" alt="Crypto Logo" className={styles.logoImage} />
            ReptoWallet
          </Link>
        </div>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link> {/* Updated link to About page */}
            </li>
            <li>
              <Link to="/team">Team</Link> {/* Updated link to Team page */}
            </li>
            <li>
              <Link to="/auth">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
