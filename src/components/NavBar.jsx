import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const Header = () => {
    // const [aboutHover, setAboutHover] = useState(false);
    // const [projectsHover, setProjectsHover] = useState(false);
    // const [resumeHover, setResumeHover] = useState(false);
    // const [contactHover, setContactHover] = useState(false);

    return (
        <div className="header-container">
            <div className="header-left">
                <Link 
                    to ="/"
                    style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}>
                        about me
                </Link>
                <Link 
                    to ="/projects"
                    style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}>
                        projects
                </Link>
                <Link 
                    to ="/resume"
                    style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}>
                        resume
                </Link>
            </div>
            <div className="header-right">
                <Link style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }} to ="/contact-me">contact me</Link>
                <p>EN</p>
                <p>FR</p>
            </div>
        </div>
    );
};

export default Header;
