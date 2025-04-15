import React from "react";

import './About.css';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

const ContactMe = () => {
    return (
        <div className="contactme-container">
            <div className="header-sticky">
                <NavBar section='about' />
            </div>
            <div className="title-container">
                About me
            </div>
            <div className="personal-statement">
                <div className="statement-title">

                </div>
                <div className="statement-body">

                </div>
            </div>
            <div className="job-experience">

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