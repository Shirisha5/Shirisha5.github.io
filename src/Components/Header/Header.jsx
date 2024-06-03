import React, { useState } from "react";
import logo from "../../Assets/Images/Logo/logo.svg";
import menu from "../../Assets/Images/Logo/menu.svg";
import close from "../../Assets/Images/Logo/closeIcon.svg";
import styles from "./Header.module.scss";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(isMenuOpen);
  return (
    <>
      <div className={styles.headerMainClass}>
        <div className={styles.wrapper}>
          <div className={styles.logoImage}>
            <img src={logo} alt="logo" />
          </div>
          <div onClick={handleMenu} className={styles.menuImage}>
            <img src={menu} />
          </div>
        </div>
      </div>
      <>
        {isMenuOpen && (
          <div className={styles.navbarContainer}>
            <div onClick={handleMenu} className={styles.closeIcon}>
              <img src={close} />
            </div>
            <div className={styles.wrapper}>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://youtu.be/SpbRY1IRUko"
                    data-text="Home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://youtu.be/SpbRY1IRUko"
                    data-text="Blogs"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://youtu.be/SpbRY1IRUko"
                    data-text="Coding"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://youtu.be/SpbRY1IRUko"
                    data-text="Skills"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://youtu.be/SpbRY1IRUko"
                    data-text="Contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </>
    </>
  );
}
