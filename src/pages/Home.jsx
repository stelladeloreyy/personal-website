import React from 'react';

import './Home.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NameSketch from '../assets/images/name-sketch.png';

const Home = ({ lang, setLang }) => {    
    return (
        <div className="home-container">
            <div className="header-sticky">
                <NavBar section='home' setLang={setLang} lang={lang} />
            </div>
            <div className="page-container">
                <div className="lined-page">
                    <img className="name-sketch" src={NameSketch} alt="Stella Delorey"></img>
                </div>
            </div>
            {/* <div className="greeting-text">
                <div className="greeting-rows">
                    <p>It's so </p> <h1>lovely </h1> <p>to meet you!</p>
                </div>
            </div>
            <div className="personal-photos"></div> */}
            <div className="footer">
                <Footer lang={lang} />
            </div>
        </div>
    );
};

export default Home;
