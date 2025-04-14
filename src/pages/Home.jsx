import React from 'react';

import './Home.css';
import NavBar from '../components/NavBar';
import NameSketch from '../assets/images/name-sketch.png';
import GreetingText from '../assets/images/greeting-text.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="header-sticky">
                <NavBar section='about' />
            </div>
            <div className="page-container">
                <div className="lined-page">
                    <img className="name-sketch" src={NameSketch} alt="Stella Delorey"></img>
                </div>
            </div>
            <div className="greeting-text">
                <img src={GreetingText} alt="Nice to meet you!"></img>
            </div>
            <div className="personal-photos"></div>
            <div className="footer-container">
                
            </div>
        </div>
    );
};

export default Home;
