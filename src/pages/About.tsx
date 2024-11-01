import styles from "./about.module.scss";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

const About = () => {
  const context = useContext(AuthContext);
  const { currentUser } = context!;

  return (
    <div className={styles.aboutPage}>
      <div className={styles.contentContainer}>
        <div className={styles.centeredContainer}>
          <h2 className={styles.centered}>
            About <span>Us</span>
          </h2>
          <p className={styles.centered}>
            A cryptocurrency wallet is a device or program that stores your cryptocurrency keys and allows you to access your coins. Wallets contain an address and the private keys needed to sign cryptocurrency transactions. Anyone who knows the private key can control the coins associated with that address.
          </p>
        </div>

        <div className={styles.row}>
          <div className={styles.imgBox}>
            <img src="/public/wallet3.png" alt="About Us" className={styles.floatingImage} />
          </div>

          <div className={styles.detailBox}>
            <h3>We Are Crypto Wallet</h3>
            <p>
              A crypto wallet doesn't technically hold a user's coins. Instead, it holds the key to their coins, which are stored on public blockchain networks. To perform various transactions, a user needs to verify their wallet address via a private key that comes in a set of specific codes.
            </p>
            <p>
              Crypto wallets are designed to store your private key, keeping your crypto accessible at all times. They also allow you to send, receive, and spend cryptocurrencies like Bitcoin and Ethereum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
