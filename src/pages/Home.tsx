import styles from "./home.module.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthContext";

const Home = () => {
  const context = useContext(AuthContext);
  const { currentUser, logout } = context!;
  
  const [cryptoType, setCryptoType] = useState("Bitcoin");
  const [walletAddress, setWalletAddress] = useState("");
  const [sentAmount, setSentAmount] = useState("");
  const [receivedAmount, setReceivedAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleSendCrypto = () => {
    const timestamp = new Date().toLocaleString();
    const transaction = {
      address: walletAddress,
      sentAmount,
      receivedAmount,
      timestamp,
    };
    // Add new transaction at the beginning of the array
    setTransactions([transaction, ...transactions]);
    console.log(`Sending ${sentAmount} ${cryptoType} to ${walletAddress}`);
    // Clear input fields after sending
    setWalletAddress("");
    setSentAmount("");
  };

  const filteredTransactions = transactions.filter(txn => {
    if (filter === "sent") return txn.sentAmount; 
    if (filter === "received") return txn.receivedAmount; 
    return true; 
  });

  return (
    <div className={styles.homePage}>
      <h1 className={styles.greet}>
        Welcome <span>{currentUser?.username}</span>, to our WEBSITE.
      </h1>

      <div className={styles.content}>
        <div className={styles.contacts}>
          <h2>Payment Transaction Info</h2>
          
          <div className={styles.buttonGroup}>
            <button onClick={() => setFilter("all")} className={styles.filterBtn}>Show All</button>
            <button onClick={() => setFilter("sent")} className={styles.filterBtn}>Only Sent</button>
            <button onClick={() => setFilter("received")} className={styles.filterBtn}>Only Received</button>
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
                    Type: {cryptoType}
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
          <h2>Current Balance</h2>
          <p>${currentUser?.walletBalance || 0}</p>

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
              disabled={!walletAddress || !sentAmount} // Disable button if fields are empty
            >
              Send
            </button>
          </div>
        </div>
      </div>

      <button onClick={logout} className={styles.logoutBtn}>
        Logout
      </button>
    </div>
  );
};

export default Home;
