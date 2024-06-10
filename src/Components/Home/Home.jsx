import React from "react";
import girl from "../../Assets/Images/coding.png";
import Lottie from "lottie-react";
import spaceAnime from "../../Assets/Lottie files/spacebg.json";
import styles from "./Home.module.scss";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.spaceAnimeLottie}>
        <Lottie animationData={spaceAnime} loop={false} />
      </div>
      <div className={styles.sectionOne}>
        <div className={styles.mainBgContainer}>
          <div className={styles.mainContent}>
            <div className={styles.girlImg}>
              <img src={girl} alt="coding girl" />
            </div>
            <div
              class={styles.title}
              tabindex="0"
              aria-label="Hey Everyone, I am Shirisha"
            >
              Hey Everyone, I am Shirisha
            </div>
            <div
              class={styles.subTitle}
              tabindex="0"
              aria-label="A Software Engineer.I code and design websites, 
                      and I love what I do"
            >
              A <span>Frontend </span> Engineer.
              <br /> I <span>code</span> and <span>design</span> websites, and I{" "}
              <span>love</span> what I do
            </div>
            <div
              tabIndex={0}
              aria-label="Over 3+ years of experience working with programming tools to
              deliver quality results to client"
              class={styles.superTitle}
            >
              Over 3+ years of experience working with programming tools to
              deliver quality results to client.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
