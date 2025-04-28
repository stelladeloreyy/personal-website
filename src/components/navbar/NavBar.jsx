import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import './NavBar.mobile.css';
import EnglishSwitch from '../../assets/images/en.png';
import FrenchSwitch from '../../assets/images/fr.png';
import Underline from '../../assets/images/underline.png';

const Header = ({ section, setLang, lang }) => { 
    const [homeHover, setHomeHover] = useState(false);
    const [aboutHover, setAboutHover] = useState(false);
    const [projectsHover, setProjectsHover] = useState(false);
    const [resumeHover, setResumeHover] = useState(false);

    const [enHover, setEnHover] = useState(false);
    const [frHover, setFrHover] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className="header-container">
            <div className="header-left">
                <div className="active-link home">
                    <Link 
                        to ="/"
                        style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}
                        onMouseEnter={() => setHomeHover(true)}
                        onMouseLeave={() => setHomeHover(false)}>
                            {
                                lang === "fr" ? "accueil" : "home"
                            }
                    </Link>
                    {(section==="home" || homeHover) && <img src={Underline} alt="underline" />}
                </div>
                <div className="active-link about">
                    <Link 
                        to ="/about"
                        style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}
                        onMouseEnter={() => setAboutHover(true)}
                        onMouseLeave={() => setAboutHover(false)}>
                            {
                                lang === "fr" ? "à propos" : "about me"
                            }
                    </Link>
                    {(section==="about" || aboutHover) && <img src={Underline} alt="underline" />}
                </div>
                <div className="active-link projects">
                    <Link 
                        to ="/projects"
                        style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}
                        onMouseEnter={() => setProjectsHover(true)}
                        onMouseLeave={() => setProjectsHover(false)}>
                            {
                                lang === "fr" ? "projets" : "projects"
                            }
                    </Link>
                    {(section==="projects" || projectsHover) && <img src={Underline} alt="underline" />}
                </div>
            </div>
            <div className="header-right">
                <div className="active-link resume">
                    <a 
                        href="https://drive.google.com/file/d/1wGLOqlPO8CJKN7bYrrrwX-6s4wFhAon6/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontFamily: 'Inter', color: 'black', textDecoration: 'none' }}
                        onMouseEnter={() => setResumeHover(true)}
                        onMouseLeave={() => setResumeHover(false)}>
                            {
                                lang === "fr" ? "résumé" : "resume"
                            }
                    </a>
                    {resumeHover && <img src={Underline} alt="underline" />}
                </div>
                <div className="language-switch">
                    <div className="language-col">
                        <button 
                            className="english-switch"
                            onClick={() => setLang("en")}
                            onMouseEnter={() => setEnHover(true)}
                            onMouseLeave={() => setEnHover(false)}>
                                <img src={EnglishSwitch} alt="EN"/>
                        </button>
                        {(lang==="en" || enHover) && <img src={Underline} className="underline" alt="underline" />}
                    </div>
                    <div className="language-col">
                        <button 
                            className="french-switch"
                            onClick={() => setLang("fr")}
                            onMouseEnter={() => setFrHover(true)}
                            onMouseLeave={() => setFrHover(false)}>
                                <img src={FrenchSwitch} alt="FR"/>
                        </button>
                        <div className="center">
                            {(lang==="fr" || frHover) && <img src={Underline} className="underline" alt="underline" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
