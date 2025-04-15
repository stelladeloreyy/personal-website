import React from 'react';

import './Footer.css';
import Phone from "./../assets/images/rotary-phone.png";
import LinkArrow from "./../assets/images/link-arrow.png";
import Sparkles from "./../assets/images/sparkles.png";

const Footer = () => { 
    return (
        <div className="footer-container">
            <div className="contact-text">
                <div className="sparkles-split">
                    <div className="sparkles-text">
                        <div className="contact-title">
                            <p>feel free to </p> <h1>reach out!</h1>
                        </div>
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
                    <div className="sparkles">
                        <img src={Sparkles} alt="Sparkles illustration"/>
                    </div>
                </div>
                <div className="small-text">
                    <p>Stella Delorey - © 2025</p>
                    <p>I'm a huge talker, doesn't matter the topic!</p>
                </div>
            </div>
            <div className="phone-image">
                <img src={Phone} alt="Rotary phone drawing" />
            </div>
        </div>
    );
};

export default Footer;
