import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState for managing menu visibility
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  // Function to close the menu and navigate
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/crypto.svg" alt="Crypto Logo" className={styles.logoImage} />
            ReptoWallet
          </Link>
        </div>
        
        <button className={styles.hamburger} onClick={toggleMenu}>
          {/* Hamburger Icon */}
          {isMenuOpen ? '✖️' : '☰'}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/team" onClick={handleLinkClick}>Team</Link>
            </li>
            <li>
              <Link to="/auth" onClick={handleLinkClick}>Login</Link>
            </li>
          </ul>
        </nav>

        {/* Sidebar Menu */}
        <div className={`${styles.sidebar} ${isMenuOpen ? styles.active : ''}`}>
          <button className={styles.closeButton} onClick={toggleMenu}>✖️</button>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/team" onClick={handleLinkClick}>Team</Link>
            </li>
            <li>
              <Link to="/auth" onClick={handleLinkClick}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
