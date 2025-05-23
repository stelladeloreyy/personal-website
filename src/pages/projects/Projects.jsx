import React from "react";

import './Projects.css';
import './Projects.mobile.css';
import NavBar from '../../components/navbar/NavBar'
import ProjectsEmpty from '../../assets/images/projects-empty.png';
import ProjectsEmptyFr from '../../assets/images/projects-empty-fr.png';

const Projects = ({ setLang, lang }) => {
    return (
        <div className="projects-container">
            <div className="header-sticky">
                <NavBar section='projects' setLang={setLang} lang={lang} />
            </div>
            <div className="projects-empty">
                {
                    lang === 'fr' ? (
                        <img src={ProjectsEmptyFr} alt="Rien a voir ici (pour l'instant)" />
                    )
                    : 
                    (
                        <img src={ProjectsEmpty} alt="Nothing to see here (yet)" />
                    )
                }
            </div>
        </div>
    );
};

export default Projects;