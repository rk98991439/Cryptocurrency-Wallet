import { Link } from "react-router-dom";
import styles from "./landingPage.module.scss";

const LandingPage = () => {
  return (
    <>
      {/* Main Content Container */}
      <div className={styles.contentContainer}>
        {/* Left Side */}
        <div className={styles.landingPage}>
          <h1 className={styles.title} style={{ color: 'var(--text)' }}>
            Welcome to the CryptoWallet
          </h1>
          <Link to="/auth">
            <button className={styles.authBtn}>AUTH</button>
          </Link>
        </div>

        {/* Right Side (Slider Section) */}
        <div className={styles.sliderSection}>
          <div id="customCarousel1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className={styles.imgBox}>
                        <img src="/wallet2.png" alt="Wallet" className={styles.bouncingImage} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more carousel items as needed */}
            </div>
            <ol className="carousel-indicators">
              <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
              {/* Add more indicators for additional slides */}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
