import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import './App.css';
import './App.mobile.css';

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import NameSketch from "./assets/images/name-sketch.png";
import LinedPage from "./assets/images/ripped-paper.png";
import BlobFish from "./assets/images/blob-fish.png";
import PersonalPhotos from "./assets/images/about-me-photos.png";
import PersonalPhotosFr from "./assets/images/about-me-photos-fr.png";
import StickyNote1 from "./assets/images/sticky-note1.png";
import StickyNote2 from "./assets/images/sticky-note2.png";
import StickyNote3 from "./assets/images/sticky-note3.png";
import StickyNote4 from "./assets/images/sticky-note4.png";
import StickyNote6 from "./assets/images/sticky-note6.png";
import Sparkles1 from "./assets/images/corner-sparkle1.png";
import Sparkles2 from "./assets/images/corner-sparkle2.png";
import Underline from "./assets/images/underline.png";
import EnglishSwitch from "./assets/images/en.png";
import FrenchSwitch from "./assets/images/fr.png";
import Phone from "./assets/images/rotary-phone.png";
import LinkArrow from "./assets/images/link-arrow.png";
import FooterSparkles from "./assets/images/sparkles.png";

const preloadImage = (src) => new Promise((resolve) => {
  if (typeof Image === 'undefined') {
    resolve();
    return;
  }

  const img = new Image();
  img.src = src;
  if (img.complete) {
    resolve();
    return;
  }
  img.onload = () => resolve();
  img.onerror = () => resolve();
});

const ASSETS_TO_PRELOAD = [
  NameSketch,
  LinedPage,
  BlobFish,
  PersonalPhotos,
  PersonalPhotosFr,
  StickyNote1,
  StickyNote2,
  StickyNote3,
  StickyNote4,
  StickyNote6,
  Sparkles1,
  Sparkles2,
  Underline,
  EnglishSwitch,
  FrenchSwitch,
  Phone,
  LinkArrow,
  FooterSparkles,
];

const GOOSE_ANIMATION_DURATION_MS = 1600;
const MIN_ANIMATION_LOOPS = 2;

function App() {
  const [lang, setLang] = useState("en");
  const [isLoading, setIsLoading] = useState(true);
  const [dotStage, setDotStage] = useState(1);

  useEffect(() => {
    let cancelled = false;
    let assetsReady = false;
    let animationComplete = false;

    const finishIfReady = () => {
      if (!cancelled && assetsReady && animationComplete) {
        setIsLoading(false);
      }
    };

    const animationTimeout = setTimeout(() => {
      animationComplete = true;
      finishIfReady();
    }, GOOSE_ANIMATION_DURATION_MS * MIN_ANIMATION_LOOPS);

    Promise.all(ASSETS_TO_PRELOAD.map(preloadImage)).then(() => {
      assetsReady = true;
      finishIfReady();
    });

    return () => {
      cancelled = true;
      clearTimeout(animationTimeout);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const intervalDuration = GOOSE_ANIMATION_DURATION_MS / 4;
    const intervalId = setInterval(() => {
      setDotStage(prev => (prev + 1) % 4);
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="app-loading-screen">
        <img src={BlobFish} className="app-loading-img" alt="Loading" />
        <span className="loading-text">
          {[1, 2, 3].map(index => (
            <span
              key={index}
              className={`loading-dot${dotStage >= index ? ' visible' : ''}`}
            >
              .
            </span>
          ))}
        </span>
      </div>
    );
  }
  
  return (
    <div className="main-container">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home setLang={setLang} lang={lang} />}></Route>
          <Route exact path='/about' element={<About setLang={setLang} lang={lang} />}></Route>
          <Route exact path='/projects' element={<Projects setLang={setLang} lang={lang} />}></Route>
          <Route path="*" element={<Navigate to='/' />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

