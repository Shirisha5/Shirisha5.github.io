import React from "react";
import styles from "./Experience.module.scss";
import { experienceDetails } from "../Constants";

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <div className={styles.experienceWrapper}>
        <div className={styles.experienceTitle}>Experience</div>
        <div className={styles.experiences}>
          {experienceDetails?.map((experience) => (
            <div key={experience.id} className={styles.experienceCard}>
              <div className={styles.experienceAt}>
                <div className={styles.experienceTime}>{experience.time}</div>
                <div className={styles.title}>{experience.companyName}</div>
                <div className={styles.subTitle}>{experience.description}</div>
                <div className={styles.skills}>
                  {experience.skills.map((skill) => (
                    <div>{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
