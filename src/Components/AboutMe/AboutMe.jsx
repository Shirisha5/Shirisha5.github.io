import React from "react";
import aboutMe from "../../Assets/Images/aboutMe.svg";
import arrow from "../../Assets/Images/arrow.png";
import { skillDetails } from "../Constants";
import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <section className={styles.aboutMeWrapper}>
      <div className={styles.aboutMeTitle}>About Me</div>
      <div className={styles.aboutMeSubWrapper}>
        <div className={styles.aboutMeImg}>
          <img src={aboutMe} />
        </div>
        <div className={styles.aboutMeContent}>
          <div>Front End Developer</div>
          <div>
            I am Shirisha. I am a Front end developer, who loves{" "}
            <span>designing and developing</span>. Apart from that, I love
            reading,cooking,singing and so on.
          </div>
          <div>
            User experience, beautiful pixels and writing clean accessible,
            human code matters to me.
          </div>
          <div>
            when it comes to learning I am always <span>curious</span> about how
            things work. Because, now is the time to understand more so that we
            may <span>fear less</span>.{" "}
          </div>
          <div className={styles.skillsMainTitle}>Skills</div>
          <div className={styles.skillsWrapper}>
            {skillDetails?.map((detail) => (
              <div className={styles.skillCard}>
                <div className={styles.skillImg}>
                  <img src={detail.image} alt={detail.skill} />
                </div>
                <div className={styles.skillTitle}>{detail.skill}</div>
              </div>
            ))}
          </div>
          <div className={styles.skillsMobileWrapper}>
            {skillDetails?.map((detail) => (
              <div className={styles.skillCard}>
                <div className={styles.skillImg}>
                  <img src={arrow} alt={detail.skill} />
                </div>
                <div className={styles.skillTitle}>{detail.skill}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
