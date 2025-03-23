import React from 'react';

import './Home.css';
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <div className="home-container">
            <div className="header-sticky">
                <NavBar />
            </div>
            <div className="page-container">
                <p>Stella Delorey</p>
            </div>
            <div className="personal-photos">
                
            </div>
        </div>
    );
};

export default Home;
