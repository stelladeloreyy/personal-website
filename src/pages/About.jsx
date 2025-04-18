import React from "react";

import './About.css';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import PersonalPhotos from '../assets/images/about-me-photos.png';
import Goose from '../assets/images/goose-print.png';

const ContactMe = () => {
    return (
        <div className="contactme-container">
            <div className="header-sticky">
                <NavBar section='about' />
            </div>
            <div className="introduction-container">
                <div className="goose-container">
                    <img src={Goose} alt="Goose illustration" />
                </div>
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
            </div>
            <div className="job-experience">

            </div>
            <div className="greeting-text">
                    <h2>It's so </h2> <h1>lovely </h1> <h2>to meet you!</h2>
            </div>
            <div className="personal-photos-container">
                <img src={PersonalPhotos} alt="Personal Photos" ></img>
            </div>
            <div className="photos">

            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default ContactMe;