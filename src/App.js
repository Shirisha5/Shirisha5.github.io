import React, { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Work from './Components/Work/Work';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import spaceAnime from "./Assets/Lottie files/loadingAnimation.json";
import Lottie from 'lottie-react';
import './App.css';

function App() {
  const container = useRef();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 96,
      behavior: "smooth",
    });
  };


  useGSAP(
    () => {
      gsap.to(".loadingAnimationStyles", {
        delay: 1.5,
        y: "-200%",
        duration: 2,
      });
    },
    { scope: container }
  );

  return (
    <>
      <div ref={container}>
        <div className='loadingAnimationStyles'>
          <div className='spaceLoader'>
            <Lottie animationData={spaceAnime} loop={true} />
          </div>
        </div>
      </div>
      <div className="portfolioApp">
        <div>
          <Header scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} skillsRef={skillsRef} workRef={workRef} contactRef={contactRef} />
          <div ref={homeRef}><Home /></div>
          <div ref={aboutRef}><AboutMe /></div>
          <div ref={skillsRef}><Experience /></div>
          <div ref={workRef}><Work /></div>
          <div ref={contactRef}><Footer /></div>
        </div>
      </div>
    </>
  );
}

export default App;
