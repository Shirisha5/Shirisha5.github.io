import React, { useState } from "react";
import logo from "../../Assets/Images/Logo/logo.svg";
import menu from "../../Assets/Images/Logo/menu.svg";
import close from "../../Assets/Images/Logo/closeIcon.svg";
import styles from "./Header.module.scss";

export default function Header(props) {
  const { scrollToSection, homeRef, aboutRef, skillsRef, workRef, contactRef } =
    props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClick = (ref) => {
    handleMenu();
    scrollToSection(ref);
  };
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
                <li onClick={() => handleClick(homeRef)}>Home</li>
                <li onClick={() => handleClick(aboutRef)}>About Me</li>
                <li onClick={() => handleClick(skillsRef)}>Experience</li>
                <li onClick={() => handleClick(workRef)}>Projects</li>
                <li onClick={() => handleClick(contactRef)}>Contact</li>
              </ul>
            </div>
          </div>
        )}
      </>
    </>
  );
}
