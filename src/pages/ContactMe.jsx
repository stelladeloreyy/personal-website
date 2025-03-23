import React from "react";

import './ContactMe.css';
import NavBar from '../components/NavBar'

const ContactMe = () => {
    return (
        <div className="contactme-container">
            <div className="header-sticky">
                <NavBar />
            </div>
            <h1>Contact Me</h1>
        </div>
    );
};

export default ContactMe;