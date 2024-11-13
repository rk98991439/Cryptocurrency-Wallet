import styles from "./home.module.scss";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Popup component
const Popup = ({ message, onClose }) => (
  <div className={styles.popupOverlay}>
    <div className={styles.popupContent}>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);

const Home = () => {
  const { currentUser, logout } = useContext(AuthContext);

  // State management
  const [publicKey, setPublicKey] = useState("your-public-key-here");
  const [cryptoType, setCryptoType] = useState("Bitcoin");
  const [walletAddress, setWalletAddress] = useState("");
  const [sentAmount, setSentAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");
  const [walletBalance, setWalletBalance] = useState(1000);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const db = getFirestore();

  // Fetch data from Firestore
  useEffect(() => {
    if (currentUser?.email) {
      const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, "users", currentUser.email);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setPublicKey(userData?.publicKey || "your-public-key-here");
          } else {
            console.log("No such document for this email!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      };

      fetchUserData();
    }
  }, [currentUser, db]);

  const handleCopyPublicKey = () => {
    navigator.clipboard.writeText(publicKey)
      .then(() => {
        setPopupMessage("Public key copied to clipboard!");
        setShowPopup(true);
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
        setPopupMessage("Failed to copy public key.");
        setShowPopup(true);
      });
  };

  const handleSendCrypto = async () => {
    const amountToSend = Number(sentAmount);
    if (amountToSend > walletBalance) {
      setPopupMessage("Insufficient balance to complete this transaction.");
      setShowPopup(true);
      return;
    }

    const transaction = {
      address: walletAddress,
      sentAmount,
      timestamp: new Date().toLocaleString(),
      cryptoType,
    };

    setTransactions([transaction, ...transactions]);
    setWalletBalance(walletBalance - amountToSend);
    setWalletAddress("");
    setSentAmount("");

    try {
      await fetch('/api/saveTransaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction),
      });
    } catch (error) {
      console.error("Error saving transaction:", error);
    }
  };

  const filteredTransactions = transactions.filter(txn => {
    if (filter === "sent") return txn.sentAmount;
    if (filter === "received") return txn.receivedAmount;
    return true;
  });

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.backgroundSection}>
      <div className={styles.homePage}>
        <h1 className={styles.greet}>
          Hi, <span>{currentUser.username}</span>! Welcome back.
        </h1>
        {/* Render transactions and wallet info */}

        <div className={styles.content}>
          <div className={styles.contacts}>
            <h2>Payment Transaction Info</h2>

            <div className={styles.buttonGroup}>
              <button onClick={() => setFilter("all")} className={styles.filterBtn}>All</button>
              <button onClick={() => setFilter("sent")} className={styles.filterBtn}>Sent</button>
              <button onClick={() => setFilter("received")} className={styles.filterBtn}>Received</button>
            </div>

            <input
              type="text"
              placeholder="Search Contacts..."
              className={styles.searchBar}
            />
            <ul className={styles.transactionList}>
              {filteredTransactions.map((txn, index) => (
                <li key={index} className={styles.transactionItem}>
                  <div className={styles.transactionDetails}>
                    <p>Wallet Address: {txn.address}</p>
                    <p className={styles.transactionInfo}>
                      Type: {txn.cryptoType}
                      <span className={styles.amount}>
                        Amount:
                        {txn.receivedAmount ? (
                          <span className={styles.arrowGreen}> +{txn.receivedAmount} </span>
                        ) : txn.sentAmount ? (
                          <span className={styles.arrowRed}> -{txn.sentAmount} </span>
                        ) : null}
                      </span>
                    </p>
                    <p style={{ margin: 0 }}>Timestamp: {txn.timestamp}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.wallet}>
            <h2>Your Account</h2>
            <p>
              Public Key: <span className={styles.publicKey}>{publicKey}</span>
              <button onClick={handleCopyPublicKey} className={styles.copyBtn}>
                 📋
              </button>
            </p>

            <h2>Current Balance</h2>
            <p>₿ {walletBalance}</p>

            <div className={styles.cryptoSelection}>
              <label htmlFor="cryptoType">Choose Cryptocurrency:</label>
              <select
                id="cryptoType"
                value={cryptoType}
                onChange={(e) => setCryptoType(e.target.value)}
              >
                <option value="Bitcoin">Bitcoin</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Litecoin">Litecoin</option>
              </select>
            </div>

            <div className={styles.transactionForm}>
              <input
                type="text"
                placeholder="Wallet Address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
              />
              <input
                type="number"
                placeholder="Amount to Send"
                value={sentAmount}
                onChange={(e) => setSentAmount(e.target.value)}
              />
              <button
                onClick={handleSendCrypto}
                className={styles.sendBtn}
                disabled={!walletAddress || !sentAmount}
              >
                Send
              </button>
            </div>
          </div>
        </div>

        <button onClick={logout} className={styles.logoutBtn}>
          Logout
        </button>

        {showPopup && <Popup message={popupMessage} onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default Home;
