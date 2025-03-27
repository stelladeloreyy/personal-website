import React from "react";

import './Projects.css';
import NavBar from '../components/NavBar'
import ProjectsEmpty from '../assets/images/projects-empty.png';

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="header-sticky">
                <NavBar section='projects' />
            </div>
            <div className="projects-empty">
                <img src={ProjectsEmpty} alt="Nothing to see here (yet)" />
            </div>
        </div>
    );
};

export default Projects;