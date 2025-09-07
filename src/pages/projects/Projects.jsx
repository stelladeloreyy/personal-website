import React from "react";

import './Projects.css';
import './Projects.mobile.css';
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer';
import StickyNote1 from '../../assets/images/sticky-note1.png';
import StickyNote2 from '../../assets/images/sticky-note2.png';
import StickyNote3 from '../../assets/images/sticky-note3.png';
import StickyNote4 from '../../assets/images/sticky-note4.png';
import Sparkles1 from '../../assets/images/corner-sparkle1.png';
import Sparkles2 from '../../assets/images/corner-sparkle2.png';


const Projects = ({ setLang, lang }) => {
    return (
        <div className="projects-container">
            <div className="header-sticky">
                <NavBar section='project-notes' setLang={setLang} lang={lang} />
            </div>
            <div className="projects-header">

            </div>
            <div className="project-notes">
                <div className="project-notes-row">
                    <div className="sticky-note">
                        <img src={StickyNote1} alt="Sticky Note" />
                        <img src={Sparkles1} className="show-grow1" alt="Sticky Note" />
                        <img src={Sparkles2} className="show-grow2" alt="Sticky Note" />
                    </div>
                    <div className="sticky-note">
                        <img src={StickyNote2} alt="Sticky Note" />
                        <img src={Sparkles1} className="show-grow1" alt="Sticky Note" />
                        <img src={Sparkles2} className="show-grow2" alt="Sticky Note" />
                    </div>
                </div>
                <div className="project-notes-row">
                    <div className="sticky-note">
                        <img src={StickyNote3} alt="Sticky Note" />
                        <img src={Sparkles1} className="show-grow1" alt="Sticky Note" />
                        <img src={Sparkles2} className="show-grow2" alt="Sticky Note" />
                    </div>
                    <div className="sticky-note">
                        <img src={StickyNote4} alt="Sticky Note" />
                        <img src={Sparkles1} className="show-grow1" alt="Sticky Note" />
                        <img src={Sparkles2} className="show-grow2" alt="Sticky Note" />
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer lang={lang} />
            </div>
        </div>
    );
};

export default Projects;