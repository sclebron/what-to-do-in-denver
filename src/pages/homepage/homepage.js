import React from 'react';
import './homepage.css';
import rmnp from './images/rmnp.png';
import denver from ',/images/denver.png';

function Homepage() {
    return (
        <div className="homeContainer">
            <div className="header">What To Do In Denver</div>
            <div className="underHeader">
                <img src={rmnp} alt="denver" className="backgroundImg" />
                <button className="questionnaireBtn">Start the questionnaire</button>
            </div>
        </div>
    )
}

export default Homepage;