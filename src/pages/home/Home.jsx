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
    const [imagesLoaded, setImagesLoaded] = useState({ paper: false, name: false });

    // Helper to check if all images are loaded
    const allImagesLoaded = imagesLoaded.paper && imagesLoaded.name;

    return (
        <div className="home-container">
            <div className="header-sticky">
                <NavBar section='home' setLang={setLang} lang={lang} />
            </div>
            <div className="page-container">
                <div
                    className={`lined-page${linedVisible && allImagesLoaded ? ' fade-in-up' : ''}`}
                    ref={linedRef}
                >
                    <img
                        className={`paper-bg${imagesLoaded.paper ? ' fade-in-up' : ''}`}
                        src={LinedPage}
                        alt="Ripped paper"
                        onLoad={() => setImagesLoaded(prev => ({ ...prev, paper: true }))}
                    />
                    <img
                        className={`name-sketch${imagesLoaded.name ? ' fade-in-up' : ''}`}
                        src={NameSketch}
                        alt="Stella Delorey"
                        onLoad={() => setImagesLoaded(prev => ({ ...prev, name: true }))}
                    />
                </div>
            </div>
            {/* ...existing code... */}
            <div className="footer">
                <Footer lang={lang} />
            </div>
        </div>
    );
};

export default Home;
