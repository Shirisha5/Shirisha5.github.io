import React from "react";
import dashboard from "../../Assets/Images/projects/Dashboard.png";
import styles from "./Work.module.scss";
import { workDetails } from "../Constants";

export default function Work() {
  return (
    <section className={styles.workSection}>
      <div className={styles.workWrapper}>
        <div className={styles.workTitle}>Work</div>
        <div className={styles.gridContainerWrapper}>
          {workDetails?.map((work) => (
            <div key={work.id} className={styles.gridCard}>
              <div>
                <a
                  href={work.link}
                  target="_blank"
                  className={styles.mainTitle}
                >
                  {work.projectName}
                </a>
                <div className={styles.description}>{work.description}</div>
              </div>
              <div className={styles.learnedSkills}>{work.skills}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
