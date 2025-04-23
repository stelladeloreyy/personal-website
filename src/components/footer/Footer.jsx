import React from 'react';

import './Footer.css';
import './Footer.mobile.css';
import Phone from "./../../assets/images/rotary-phone.png";
import LinkArrow from "./../../assets/images/link-arrow.png";
import Sparkles from "./../../assets/images/sparkles.png";

const Footer = ({ lang }) => { 
    return (
        <div className="footer-container">
            <div className="phone-image">
                <img src={Phone} alt="Rotary phone drawing" />
            </div>
            <div className="contact-text">
                <div className="sparkles-split">
                    <div className="sparkles-text">
                        {
                            lang === "fr" ? (
                                <div className="contact-title fr">
                                    <p>n'hésiter pas à me </p> <h1>contacter !</h1>
                                </div>
                            )
                            :
                            (
                                <div className="contact-title en">
                                    <p>feel free to </p> <h1>reach out!</h1>
                                </div>
                            )
                        }
                        <div className="contact-links">     
                            <div className="email-link">
                                <a href="mailto:stelladelorey@gmail.com">Email</a>
                                <img src={LinkArrow} alt="Diagonal arrow"/>
                            </div>
                            <div className="email-link">
                                <a href="https://www.linkedin.com/in/stella-delorey/" target="_blank" rel="noreferrer">LinkedIn</a>
                                <img src={LinkArrow} alt="Diagonal arrow"/>
                            </div>
                        </div>
                    </div>
                    {
                        lang === "fr" ? (
                            <div className="sparkles fr">
                                <img src={Sparkles} alt="Sparkles illustration"/>
                            </div>
                        )
                        :
                        (
                            <div className="sparkles en">
                                <img src={Sparkles} alt="Sparkles illustration"/>
                            </div>
                        )
                    }
                </div>
                <div className="small-text">
                    <p>Stella Delorey - © 2025</p>
                    <p>
                        {
                            lang === "fr" ? "Je parle énormément, peu importe le sujet !" : "I'm a huge talker, doesn't matter the topic!"
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
