import React from "react";
// import { useState } from 'react';
import useController from './useController';
import Button from "react-bootstrap/Button";
import './DigitalBusinessCard.css';

const DigitalBusinessCard = () => {
    const {
        qrCode,
        pdfUrl, 
        errors,
        onSubmit,
    } = useController();

    console.log("QR Code URL:", qrCode);

    return (
        <div className="main-container">
            <form onSubmit={onSubmit}>
                <p>Full Name</p>
                <input 
                    type="text"
                    id="givenName"  
                    name="givenName"
                />
                <p>Email</p>
                <input 
                    type="text"
                    id="email"
                    name="email"
                />
                <p>Job Title</p>
                <input 
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                />
                <p>Phone Number</p>
                <input 
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                />
                <p>Team</p>
                <input 
                    type="text"
                    id="team"
                />
                <p>Department</p>
                <input 
                    type="text"
                    id="department"
                />
                <br /><br />
                <div className="text-center">
                    <Button type="submit">
                        Generate QR Code
                    </Button>
                </div>
            </form>
            {qrCode && (
                <div>
                    <br />
                    <div className="text-center">
                        <img src={qrCode} alt="QR Code" />
                    </div>
                    {pdfUrl && (
                        <div className="text-center">
                            <a href={pdfUrl} target="_blank" rel="noreferrer">
                                <Button>
                                    Download
                                </Button>
                            </a>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default DigitalBusinessCard;