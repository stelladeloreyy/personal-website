import React from "react";

import './About.css';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import PersonalPhotos from '../assets/images/about-me-photos.png';
import Goose from '../assets/images/goose-print.png';
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
                            <div className="intro-title">
                                <h1>A</h1><h2>pprends un peu sur moi</h2>
                            </div>
                            <div className="intro-body">
                                <p>
                                    Salut, je m'appelle Stella ! En ce moment, je travaille comme stagiaire 
                                    <br/>développeuse, mais je retournerai cet été étudier <b>l'Informatique @ Waterloo</b>
                                    <br/> et <b>l'Administration des affaires @ Laurier</b>.
                                    <br /><br />
                                    En dehors de ma vie "professionnelle", <b>j'adooooooore</b> chiner, le karaoké
                                    <br /> et dépenser tout mon argent en nourriture :P Tu devrais vraiment écouter
                                    <br /> quelques-unes de mes musiques préférées <b><a href="https://open.spotify.com/user/xslx96huh47vwxnahy9qnu2tt?si=6458427fd38649e1" target="_blank" rel="noreferrer">ici !</a></b>
                                    </p>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="introduction-text">
                            <div className="intro-title">
                                <h1>L</h1><h2>earn a little about me</h2>
                            </div>
                            <div className="intro-body">
                                <p>
                                    Hey, I'm Stella! Right now I'm on a coop term working as a software 
                                    <br/>engineer, but I'll be heading back to study <b>Computer Science @ Waterloo</b>
                                    <br/> and <b>Business Administration @ Laurier</b> this summer.
                                    <br /><br />
                                    Outside of my "professional" life, I <b>loooooove</b> thrifting, karaoke, and
                                    <br /> wasting all my money on food :P You should totally check out some of my
                                    <br /> fav music <b><a href="https://open.spotify.com/user/xslx96huh47vwxnahy9qnu2tt?si=6458427fd38649e1" target="_blank" rel="noreferrer">here!</a></b>
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
                    <div className="greeting-text">
                        <h2>C'est si </h2> <h1>charmant </h1> <h2>de te recontrer !</h2>
                    </div>
                ) 
                : 
                (
                    <div className="greeting-text">
                        <h2>It's so </h2> <h1>lovely </h1> <h2>to meet you!</h2>
                    </div>
                )
            }
            <div className="personal-photos-container">
                <img src={PersonalPhotos} alt="Personal Photos"></img>
            </div>
            <div className="photos">

            </div>
            <div className="footer">
                <Footer lang={lang} />
            </div>
        </div>
    );
};

export default ContactMe;