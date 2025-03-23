import React from "react";

import './Projects.css';
import NavBar from '../components/NavBar'

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="header-sticky">
                <NavBar />
            </div>
            <h1>Projects</h1>
        </div>
    );
};

export default Projects;