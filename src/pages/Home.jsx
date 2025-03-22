import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <div className="main-container">
            <div className="header">
                <Link className={"hs-l"} to ="/">about me</Link>
                <Link className={"hs-l"} to ="/projects">projects</Link>
                <Link className={"hs-l"} to ="/resume">resume</Link>
                <Link className={"hs-r"} to ="/contact">contact</Link>
            </div>
        </div>
    );
};

export default Home;
