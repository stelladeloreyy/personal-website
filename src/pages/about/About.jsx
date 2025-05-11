import React from "react";

import './About.css';
import './About.mobile.css';
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer';
import PersonalPhotos from '../../assets/images/about-me-photos.png';
import PersonalPhotosFr from '../../assets/images/about-me-photos-fr.png';
import Goose from '../../assets/images/goose-print.png';
// import TicketSunLife from '../assets/images/ticket-sunlife.png'
// import TicketFirstOntario from '../assets/images/ticket-firstontario.png'

const ContactMe = ({ lang, setLang }) => {
    return (
        <div className="contactme-container">
            <div className="header-sticky">
                <NavBar section='about' setLang={setLang} lang={lang} />
            </div>
            <div className="introduction-container">
                <div className="goose-container">
                    <img src={Goose} alt="Goose illustration" />
                </div>
                {
                    lang === "fr" ? (
                        <div className="introduction-text">
                            <div className="intro-title fr">
                                <h1>A</h1><h2>pprends un peu sur moi</h2>
                            </div>
                            <div className="intro-body fr">
                                <p>
                                    Salut, je m'appelle Stella ! En ce moment, je travaille comme stagiaire 
                                    développeuse, mais je retournerai cet été étudier <b>l'Informatique @ Waterloo</b> et <b>l'Administration des affaires @ Laurier</b>.
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
                                    Hey, I'm Stella! Right now I'm on a coop term working as a software 
                                    engineer, but I'll be heading back to study <b>Computer Science @ Waterloo</b> and <b>Business Administration @ Laurier</b> this summer.
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
            {/* <div className="job-experience">
                <div className="title-container">
                    <div className="experience-title">
                        <h1>E</h1><h2>xperience</h2>
                    </div>
                </div>
                <div className="experience-container first">
                    <img src={TicketSunLife} alt="Vintage ticket">
                    </img>
                </div>
                <div className="experience-container second">
                    <img src={TicketFirstOntario} alt="Vintage ticket">
                    
                    </img>
                </div>
            </div> */}
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
                        <h2>It's so </h2> <h1>lovely </h1> <h2>to meet you!</h2>
                    </div>
                )
            }
            <div className="personal-photos-container">
                {
                    lang === "fr" ? (
                        <img src={PersonalPhotosFr} alt="Personal Photos"></img>

                    ) 
                    :
                    (
                        <img src={PersonalPhotos} alt="Personal Photos"></img>
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