import React, { useState } from 'react';
import { motion } from 'motion/react';

import './Home.css';
import './Home.mobile.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import NameSketch from '../../assets/images/name-sketch.png';
import LinedPage from '../../assets/images/ripped-paper.png'

const Home = ({ lang, setLang }) => {    
    const [imagesLoaded, setImagesLoaded] = useState({ paper: false, name: false });

    return (
        <div className="home-container">
            <div className="header-sticky">
                <NavBar section='home' setLang={setLang} lang={lang} />
            </div>
            <div className="page-container">
                <motion.div
                    className="lined-page"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <motion.img
                        className="paper-bg"
                        src={LinedPage}
                        alt="Ripped paper"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        onLoad={() => setImagesLoaded(prev => ({ ...prev, paper: true }))}
                    />
                    <motion.img
                        className="name-sketch"
                        src={NameSketch}
                        alt="Stella Delorey"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                        onLoad={() => setImagesLoaded(prev => ({ ...prev, name: true }))}
                    />
                </motion.div>
            </div>
            <motion.div
                className="footer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1, margin: '0px 0px -12% 0px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Footer lang={lang} />
            </motion.div>
        </div>
    );
};

export default Home;
