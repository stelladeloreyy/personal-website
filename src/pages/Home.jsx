import React from 'react';

import './Home.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NameSketch from '../assets/images/name-sketch.png';
//  import GreetingText from '../assets/images/greeting-text.png';

const Home = () => {
    return (
        <div className="home-container">
            <div className="header-sticky">
                <NavBar section='home' />
            </div>
            <div className="page-container">
                <div className="lined-page">
                    <img className="name-sketch" src={NameSketch} alt="Stella Delorey"></img>
                </div>
            </div>
            <div className="greeting-text">
                {/* <img src={GreetingText} alt="Nice to meet you!"></img> */}
                <div className="greeting-rows">
                    <p>It's so </p> <h1>lovely </h1> <p>to meet you!</p>
                </div>
            </div>
            <div className="personal-photos"></div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
