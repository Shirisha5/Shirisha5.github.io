import React from "react";
import { workDetails } from "../Constants";
import styles from "./Work.module.scss";

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
                {work.id !== 5 && (
                  <div className={styles.viewMore} title="behance link">
                    <a href={work.be_link} target="_blank">
                      View
                    </a>
                  </div>
                )}
              </div>
              <div className={styles.learnedSkills}>{work.skills}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
