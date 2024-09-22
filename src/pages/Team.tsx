import styles from './Team.module.scss';

const Team = () => {
  return (
    <div className={styles.heroArea}>
      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className="container-fluid">
          <div className={styles.headingContainer}>
            <h2>Our <span>Team</span></h2>
          </div>

          <div className={styles.teamContainer}>
            <div className={styles.row}>
              {/* Team Member 1 */}
              <div className={styles.box}>
                <div className={styles.imgBox}>
                  <img src="/path/to/team-1.jpg" alt="Team member 1" />
                </div>
                <div className={styles.detailBox}>
                  <h5>Joseph Brown</h5>
                  <p>Marketing Head</p>
                </div>
                <div className={styles.socialContainer}>
                  <a href="#" className={styles.social}>
                    <img src="./public/github.svg" alt="github-icon" />
                  </a>
                  <a href="#" className={styles.social}>
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
                  <img src="/path/to/team-2.jpg" alt="Team member 2" />
                </div>
                <div className={styles.detailBox}>
                  <h5>Nancy White</h5>
                  <p>Design Head</p>
                </div>
                <div className={styles.socialContainer}>
                  <a href="#" className={styles.social}>
                    <img src="./public/github.svg" alt="github-icon" />
                  </a>
                  <a href="#" className={styles.social}>
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
                  <img src="/path/to/team-3.jpg" alt="Team member 3" />
                </div>
                <div className={styles.detailBox}>
                  <h5>Mark Johnson</h5>
                  <p>Development Lead</p>
                </div>
                <div className={styles.socialContainer}>
                  <a href="#" className={styles.social}>
                    <img src="./public/github.svg" alt="github-icon" />
                  </a>
                  <a href="#" className={styles.social}>
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
                  <img src="/path/to/team-4.jpg" alt="Team member 4" />
                </div>
                <div className={styles.detailBox}>
                  <h5>Susan Lee</h5>
                  <p>Content Strategist</p>
                </div>
                <div className={styles.socialContainer}>
                  <a href="#" className={styles.social}>
                    <img src="./public/github.svg" alt="github-icon" />
                  </a>
                  <a href="#" className={styles.social}>
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
