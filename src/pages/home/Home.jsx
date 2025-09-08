import React, { useRef, useState, useEffect } from 'react';

import './Home.css';
import './Home.mobile.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import NameSketch from '../../assets/images/name-sketch.png';
import LinedPage from '../../assets/images/ripped-paper.png'

const useFadeInOnView = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);
    return [ref, visible];
};

const Home = ({ lang, setLang }) => {    
    const [linedRef, linedVisible] = useFadeInOnView();
    return (
        <div className="home-container">
            <div className="header-sticky">
                <NavBar section='home' setLang={setLang} lang={lang} />
            </div>
            <div className="page-container">
                <div
                    className={`lined-page${linedVisible ? ' fade-in-up' : ''}`}
                    ref={linedRef}
                >
                    <img className="paper-bg" src={LinedPage} alt="Ripped paper" />
                    <img className="name-sketch" src={NameSketch} alt="Stella Delorey" />
                </div>
            </div>
            {/* <div className="greeting-text">
                <div className="greeting-rows">
                    <p>It's so </p> <h1>lovely </h1> <p>to meet you!</p>
                </div>
            </div>
            <div className="personal-photos"></div> */}
            <div className="footer">
                <Footer lang={lang} />
            </div>
        </div>
    );
};

export default Home;
