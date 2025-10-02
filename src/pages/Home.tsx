import styles from "./Home.module.css";
import "/pfp.png";

export function Home() {
  return (
    <div className={styles.backgroundPicture}>
    <div className={styles.container}
    >
      <div className={styles.borderContainer}>
        {/*HEADER*/}
        <header className={styles.header}>
          <img src={"/pfp.png"} alt="Profile" className={styles.pfp} />
          <div>
            <h1>STANISLAV</h1>
            <h1>TARASENKO</h1>
            <h3>Front-end developer React / TypeScript / Next</h3>
          </div>
        </header>

        <div className={styles.body}>
          {/*DETAILS*/}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>DETAILS</h2>
            <p style={{paddingTop: "1rem"}}>+380 935 102 056</p>
            <p style={{paddingTop: "1rem"}}>stas.tarasenko1991@gmail.com</p>
          </section>

          {/*SUMMARY*/}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>SUMMARY</h2>
            <h3>My Skills and Responsibilities</h3>
            <ul>
              <li>
                Developed dynamic user interfaces using React/ TypeScript/
                Next.js ensuring robust and scalable front-end architecture.
              </li>
              <li>
                Implemented styling for components with SASS, optimizing for
                cross-browser compatibility and responsiveness.
              </li>
              <li>
                Utilized Axios for API requests, enhancing data retrieval and
                communication efficiency.
              </li>
              <li>
                Managed state using Redux, ensuring efficient state management
                across various components.
              </li>
            </ul>
          </section>

          {/*EXPERIENCE*/}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>EXPERIENCE</h2>

            <div className={styles.job}>
              <h3>Frontend engineer, IronFX, Cyprus</h3>
              <h4 className={styles.date}>MAR 2024 - CURRENT</h4>
              <p>
                Creating Crypto market, as Binance, using React / TS / Next with
                websockets for live information about currency prices.
              </p>
            </div>

            <div className={styles.job}>
              <h3>Frontend engineer, Novaince, Ukraine</h3>
              <h4 className={styles.date}>MAR 2023 - MAR 2024</h4>
              <p>
                Creating websites for different travel agencies. Stack: React /
                TypeScript / Next.js
              </p>
            </div>

            <div className={styles.job}>
              <h3>Frontend developer, Procoders, Kharkiv, Ukraine</h3>
              <h4 className={styles.date}>OCT 2021 - SEP 2022</h4>
              <p className={styles.pstyle}>
                Meeting platforms for business to search and connect with
                another businesses in US.
              </p>
            </div>

            <div>
              <h3>
                Frontend Developer, Vue / React, Megadev, Kharkiv, Ukraine
              </h3>
              <h4 className={styles.date}>AUG 2020 - SEP 2021</h4>
              <p className={styles.pstyle}>
                Frontend development in the company, work with designs form
                Figma, making reusable Components, adding different logic,
                working with styles CSS, SAAS and Styled-Components, work with
                REST API, etc.
              </p>
              {/*пару слов в тексте исправил*/}
            </div>
          </section>

          {/*EDUCATION*/}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>EDUCATION</h2>

            <div className={styles.job}>
              <h3>Bachelor degree, National Transportation University, Kiev</h3>
              <h4 className={styles.date}>2009 - 2013</h4>
            </div>

            <div className={styles.job}>
              <h3>Association Certificate, Hillel IT School, Kharkiv</h3>
              <h4 className={styles.date}>2019 - 2020</h4>
              <p>JavaScript / React</p>
            </div>

            <div>
              <h3>Association Certificate, Hillel IT School, Kharkiv</h3>
              <h4 className={styles.date}>2023 - 2024</h4>
              <p>TypeScript / Node.js</p>
            </div>
          </section>

          {/*SKILLS*/}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>SKILLS</h2>
            <div className={styles.skills}>
              <div className={styles.column}>
                <div className={styles.skill}>
                  <span>React</span>
                  <div className={styles.line}>
                    <div className={styles.fill} style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className={styles.skill}>
                  <span>Node.js</span>
                  <div className={styles.line}>
                    <div className={styles.fill} style={{ width: "60%" }}></div>
                  </div>
                </div>
                <div className={styles.skill}>
                  <span>JavaScript</span>
                  <div className={styles.line}>
                    <div className={styles.fill} style={{ width: "80%" }}></div>
                  </div>
                </div>
                <div className={styles.skill}>
                  <span>Git</span>
                  <div className={styles.line}>
                    <div className={styles.fill} style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>

              <div className={styles.column}>
                <div className={styles.skill}>
                  <span>TS</span>
                  <div className={styles.line}>
                    <div className={styles.fill} style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className={styles.skill}>
                  <span>Next</span>
                  <div className={styles.line}>
                    <div className={styles.fill} style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div className={styles.skill}>
                  <span>MySQL</span>
                  <div className={styles.line}>
                    <div className={styles.fill} style={{ width: "65%" }}></div>
                  </div>
                </div>
                <div className={styles.skill}>
                  <span>Postman</span>
                  <div className={styles.line}>
                    <div className={styles.fill} style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
