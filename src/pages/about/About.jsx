import React, { useState } from "react";
import { motion } from "motion/react";

import './About.css';
import './About.mobile.css';
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer';
import PersonalPhotos from '../../assets/images/about-me-photos.png';
import PersonalPhotosFr from '../../assets/images/about-me-photos-fr.png';
import Goose from '../../assets/images/goose-print.png';

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1, margin: '0px 0px 0px 0px' },
    transition: { duration: 0.6, ease: 'easeOut' },
};

const fadeInMid = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1, margin: '0px 0px -15% 0px' },
    transition: { duration: 0.6, ease: 'easeOut' },
};

const ContactMe = ({ lang, setLang }) => {
    const [imagesLoaded, setImagesLoaded] = useState({ goose: false, photos: false });
    const gooseLoaded = imagesLoaded.goose;
    const photosLoaded = imagesLoaded.photos;

    return (
        <div className="contactme-container">
            <div className="header-sticky">
                <NavBar section='about' setLang={setLang} lang={lang} />
            </div>
            <motion.div
                className="introduction-container"
                initial={fadeInUp.initial}
                whileInView={gooseLoaded ? fadeInUp.whileInView : fadeInUp.initial}
                viewport={fadeInUp.viewport}
                transition={fadeInUp.transition}
            >
                <div className="goose-container">
                    <img
                        src={Goose}
                        alt="Goose illustration"
                        onLoad={() => setImagesLoaded(prev => ({ ...prev, goose: true }))}
                    />
                </div>
                {
                    lang === "fr" ? (
                        <div className="introduction-text">
                            <div className="intro-title fr">
                                <h1>A</h1><h2>pprends un peu sur moi</h2>
                            </div>
                            <div className="intro-body fr">
                                <p>
                                    Salut, je m'appelle Stella ! En ce moment, j'étude <b>l'Informatique @ Waterloo</b> et <b>l'Administration des affaires @ Laurier</b>, mais je retournerai au travaille cet hiver (embauchez-moi s'il vous plaît).
                                    <br /><br />
                                    En dehors de ma vie "professionnelle", <b>j'adooooooore</b> chiner, le karaoké
                                    et dépenser tout mon argent en nourriture :P Tu devrais vraiment écouter
                                    quelques-unes de mes musiques préférées <b><a href="https://open.spotify.com/user/xslx96huh47vwxnahy9qnu2tt?si=6458427fd38649e1" target="_blank" rel="noreferrer">ici !</a></b>
                                    </p>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="introduction-text">
                            <div className="intro-title en">
                                <h1>L</h1><h2>earn a little about me</h2>
                            </div>
                            <div className="intro-body en">
                                <p>
                                    Hey, I'm Stella! I'm currently studying <b>Computer Science @ Waterloo</b> and <b>Business Administration @ Laurier</b>, and I'll be back to work this winter (please hire me).
                                    <br /><br />
                                    Outside of my "professional" life, I <b>loooooove</b> thrifting, karaoke, and
                                    wasting all my money on food :P You should totally check out some of my
                                    fav music <b><a href="https://open.spotify.com/user/xslx96huh47vwxnahy9qnu2tt?si=6458427fd38649e1" target="_blank" rel="noreferrer">here!</a></b>
                                    </p>
                            </div>
                        </div>
                    )
                }
            </motion.div>
            <motion.div
                className="greeting-photos"
                initial={fadeInMid.initial}
                whileInView={photosLoaded ? fadeInMid.whileInView : fadeInMid.initial}
                viewport={fadeInMid.viewport}
                transition={fadeInMid.transition}
            >
                {
                    lang === "fr" ? (
                        <div className="greeting-text fr">
                            <div className="mobile-greeting-split">
                                <h2>C'est si </h2>
                                <h1>charmant </h1>
                            </div>
                            <h2>de te rencontrer !</h2>
                        </div>
                    )
                    :
                    (
                        <div className="greeting-text en">
                            <h2>It's so </h2>
                            <h1>lovely </h1>
                            <h2>to meet you!</h2>
                        </div>
                    )
                }
                <div className="personal-photos-container">
                    <img
                        src={lang === "fr" ? PersonalPhotosFr : PersonalPhotos}
                        alt="Personal Photos"
                        onLoad={() => setImagesLoaded(prev => ({ ...prev, photos: true }))}
                    />
                </div>
            </motion.div>
            <motion.div
                className="footer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <Footer lang={lang} />
            </motion.div>
        </div>
    );
};

export default ContactMe;