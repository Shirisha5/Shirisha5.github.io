import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Work from './Components/Work/Work';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import './App.css';

function App() {
  const container = useRef();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".overlay h1", {
        opacity: 0,
        y: -60,
        duration: 2,
      });

      gsap.to(".overlay span", {
        delay: 0.3,
        opacity: 0,
        y: -60,
        duration: 2,
      });

      gsap.to(".overlay", {
        delay: 1,
        top: "-125%",
        duration: 2,
      });
    },
    { scope: container }
  );


  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 96,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      {/* <div ref={container}>
        {" "}
        <div className="overlay">
          <h1>Shirisha</h1>
          <span>Web Developer</span>
        </div>
      </div> */}
      <Header scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} workRef={workRef} contactRef={contactRef} />
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><AboutMe /></div>
      <div ref={skillsRef}><Experience /></div>
      <div ref={workRef}><Work /></div>
      <div ref={contactRef}><Footer /></div>
    </div>
  );
}

export default App;
