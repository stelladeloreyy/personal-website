import React from 'react';

import './Home.css';
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <div className="home-container">
            <NavBar />
            <div className="page-container">
                <p>Stella Delorey</p>
            </div>
        </div>
    );
};

export default Home;
