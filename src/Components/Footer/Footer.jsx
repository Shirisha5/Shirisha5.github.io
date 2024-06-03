import React from "react";
import behance from "../../Assets/Images/behance.svg";
import linkedIn from "../../Assets/Images/linkedIn.svg";
import github from "../../Assets/Images/githubFooter.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <hr className={styles.hrLine} />
      <div className={styles.footerContent}>
        <div> © Copyright 2024, Shirisha. All Rights Reserved.</div>
        <div className={styles.socialLinks}>
          <a href="https://github.com/Shirisha5" target="_blank">
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/shirisha-c/" target="_blank">
            <img src={linkedIn} />
          </a>
          <a href="https://www.behance.net/shirishac" target="_blank">
            <img src={behance} />
          </a>
        </div>
      </div>
    </div>
  );
}
