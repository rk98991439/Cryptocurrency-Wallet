import styles from './Team.module.scss';

const Team = () => {
  return (
    <div className={styles.heroArea}>
      {/* Team Section */}
      <section className={`${styles.teamSection} ${styles.contentContainer}`}>
        <div className="container-fluid">
          <div className={styles.headingContainer}>
            <h2>Our <span>Team</span></h2>
          </div>

          <div className={styles.teamContainer}>
            <div className={styles.row}>
              {/* Team Member 1 */}
              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <img src="./public/Bala Shashi.png" alt="Team member 1" />
                </div>
                <div className={styles.detailBox}>
                  <h5>Bala Shashi</h5>
                  <p>Marketing Head</p>
                </div>
                <div className={styles.socialContainer}>
                  <a href="https://github.com/Shashisxp" className={styles.social} target="_blank" rel="noopener noreferrer">
                    <img src="./public/github.svg" alt="github-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/bala-shashi-51249b219/" className={styles.social} target="_blank" rel="noopener noreferrer">
                    <img src="./public/linkedin.svg" alt="linkedin-icon" />
                  </a>
                  <a href="#" className={styles.social}>
                    <img src="./public/twitter.svg" alt="twitter-icon" />
                  </a>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <img src="./public/Ayush.jpeg" alt="Team member 2" />
                </div>
                <div className={styles.detailBox}>
                  <h5>Ayush</h5>
                  <p>Design Head</p>
                </div>
                <div className={styles.socialContainer}>
                  <a href="https://github.com/Ayush-kathayat" className={styles.social} target="_blank" rel="noopener noreferrer">
                    <img src="./public/github.svg" alt="github-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/ayush-kathayat-306218248/" className={styles.social} target="_blank" rel="noopener noreferrer">
                    <img src="./public/linkedin.svg" alt="linkedin-icon" />
                  </a>
                  <a href="#" className={styles.social}>
                    <img src="./public/twitter.svg" alt="twitter-icon" />
                  </a>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <img src="./public/Rohit Kumar_.png" alt="Team member 3" />
                </div>
                <div className={styles.detailBox}>
                  <h5>Rohit Kumar</h5>
                  <p>Development Lead</p>
                </div>
                <div className={styles.socialContainer}>
                  <a href="https://github.com/rk98991439" className={styles.social} target="_blank" rel="noopener noreferrer">
                    <img src="./public/github.svg" alt="github-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/rohit--kumar-/" className={styles.social} target="_blank" rel="noopener noreferrer">
                    <img src="./public/linkedin.svg" alt="linkedin-icon" />
                  </a>
                  <a href="#" className={styles.social}>
                    <img src="./public/twitter.svg" alt="twitter-icon" />
                  </a>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <img src="./public/Sutirtho.jpeg" alt="Team member 4" />
                </div>
                <div className={styles.detailBox}>
                  <h5>Sutirtho</h5>
                  <p>Content Strategist</p>
                </div>
                <div className={styles.socialContainer}>
                  <a href="https://github.com/Sutirtho9" className={styles.social} target="_blank" rel="noopener noreferrer">
                    <img src="./public/github.svg" alt="github-icon" />
                  </a>
                  <a href="https://www.linkedin.com/in/sutirthochakravorty/" className={styles.social} target="_blank" rel="noopener noreferrer">
                    <img src="./public/linkedin.svg" alt="linkedin-icon" />
                  </a>
                  <a href="#" className={styles.social}>
                    <img src="./public/twitter.svg" alt="twitter-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
