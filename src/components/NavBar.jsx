import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import EnglishSwitch from '../assets/images/en.png';
import FrenchSwitch from '../assets/images/fr.png';
import Underline from '../assets/images/underline.png';

const Header = ({ section }) => { 
    const [aboutHover, setAboutHover] = useState(false);
    const [projectsHover, setProjectsHover] = useState(false);
    const [contactHover, setContactHover] = useState(false);

    const [language, setLanguage] = useState("en");
    const [enHover, setEnHover] = useState(false);
    const [frHover, setFrHover] = useState(false);

    return (
        <div className="header-container">
            <div className="header-left">
                <div className="active-link">
                    <Link 
                        to ="/"
                        style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}
                        onMouseEnter={() => setAboutHover(true)}
                        onMouseLeave={() => setAboutHover(false)}>
                            about me
                    </Link>
                    {(section==="about" || aboutHover) && <img src={Underline} alt="underline" />}
                </div>
                <div className="active-link projects">
                    <Link 
                        to ="/projects"
                        style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}
                        onMouseEnter={() => setProjectsHover(true)}
                        onMouseLeave={() => setProjectsHover(false)}>
                            projects
                    </Link>
                    {(section==="projects" || projectsHover) && <img src={Underline} alt="underline" />}
                </div>
                <div className="active-link">
                    <Link 
                        to ="/resume"
                        style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}>
                            resume
                    </Link>
                </div>
            </div>
            <div className="header-right">
                <div className="active-link">
                    <Link 
                        to ="/contact-me"
                        style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}
                        onMouseEnter={() => setContactHover(true)}
                        onMouseLeave={() => setContactHover(false)}>contact me
                    </Link>
                    {(section==="contact" || contactHover) && <img src={Underline} alt="underline" />}
                </div>
                <div className="language-switch">
                    <div className="language-col">
                        <button 
                            className="english-switch"
                            onClick={() => setLanguage("en")}
                            onMouseEnter={() => setEnHover(true)}
                            onMouseLeave={() => setEnHover(false)}>
                                <img src={EnglishSwitch} alt="EN"/>
                        </button>
                        {(language==="en" || enHover) && <img src={Underline} className="underline" alt="underline" />}
                    </div>
                    <div className="language-col">
                        <button 
                            className="french-switch"
                            onClick={() => setLanguage("fr")}
                            onMouseEnter={() => setFrHover(true)}
                            onMouseLeave={() => setFrHover(false)}>
                                <img src={FrenchSwitch} alt="FR"/>
                        </button>
                        {(language==="fr" || frHover) && <img src={Underline} className="underline" alt="underline" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
