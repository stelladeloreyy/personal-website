import React from "react";

import './About.css';
import './About.mobile.css';
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer';
import PersonalPhotos from '../../assets/images/about-me-photos.png';
import PersonalPhotosFr from '../../assets/images/about-me-photos-fr.png';
import Goose from '../../assets/images/goose-print.png';
import { useRef, useState, useEffect } from "react";

const ContactMe = ({ lang, setLang }) => {

    // Custom hook for intersection observer
    function useFadeInOnView() {
        const ref = useRef(null);
        const [visible, setVisible] = useState(false);
        useEffect(() => {
            const node = ref.current;
            if (!node) return;
            const observer = new window.IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.disconnect(); // Only animate once
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(node);
            return () => observer.disconnect();
        }, []);
        return [ref, visible];
    }

    const [introRef, introVisible] = useFadeInOnView();
    const [greetRef, greetVisible] = useFadeInOnView();
    const [photosRef, photosVisible] = useFadeInOnView();
    const [imagesLoaded, setImagesLoaded] = useState({ goose: false, photos: false });
    const allImagesLoaded = imagesLoaded.goose && imagesLoaded.photos;

    return (
        <div className="contactme-container">
            <div className="header-sticky">
                <NavBar section='about' setLang={setLang} lang={lang} />
            </div>
            <div
                className={`introduction-container${introVisible && allImagesLoaded ? ' fade-in-up' : ''}`}
                ref={introRef}
            >
                <div className="goose-container">
                    <img
                        src={Goose}
                        alt="Goose illustration"
                        className={imagesLoaded.goose ? 'fade-in-up' : ''}
                        onLoad={() => setImagesLoaded(prev => ({ ...prev, goose: true }))}
                    />
                </div>
                {/* ...existing code for introduction text... */}
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
            </div>
            {/* ...existing code for greeting text... */}
            {
                lang === "fr" ? (
                    <div
                        className={`greeting-text fr${greetVisible ? ' fade-in-up' : ''}`}
                        ref={greetRef}
                    >
                        <div className="mobile-greeting-split">
                            <h2>C'est si </h2> 
                            <h1>charmant </h1>
                        </div> 
                        <h2>de te rencontrer !</h2>
                    </div>
                ) 
                : 
                (
                    <div
                        className={`greeting-text en${greetVisible ? ' fade-in-up' : ''}`}
                        ref={greetRef}
                    >
                        <h2>It's so </h2> <h1>lovely </h1> <h2>to meet you!</h2>
                    </div>
                )
            }
            <div
                className={`personal-photos-container${photosVisible && imagesLoaded.photos ? ' fade-in-up' : ''}`}
                ref={photosRef}
            >
                {
                    lang === "fr" ? (
                        <img
                            src={PersonalPhotosFr}
                            alt="Personal Photos"
                            className={imagesLoaded.photos ? 'fade-in-up' : ''}
                            onLoad={() => setImagesLoaded(prev => ({ ...prev, photos: true }))}
                        />
                    ) 
                    :
                    (
                        <img
                            src={PersonalPhotos}
                            alt="Personal Photos"
                            className={imagesLoaded.photos ? 'fade-in-up' : ''}
                            onLoad={() => setImagesLoaded(prev => ({ ...prev, photos: true }))}
                        />
                    )
                }
            </div>
            <div className="footer">
                <Footer lang={lang} />
            </div>
        </div>
    );
};

export default ContactMe;