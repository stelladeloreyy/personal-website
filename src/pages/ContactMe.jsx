import React from "react";

import './ContactMe.css';
import NavBar from '../components/NavBar'
import Title from '../assets/images/contact-me-text.png';

const ContactMe = () => {
    return (
        <div className="contactme-container">
            <div className="header-sticky">
                <NavBar section='contact' />
            </div>
            <div className="title-container">
                <img src={Title}  alt="Contact Me" />
            </div>
        </div>
    );
};

export default ContactMe;