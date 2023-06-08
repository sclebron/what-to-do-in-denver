import React from 'react';
import './homepage.css';
import rmnp from './images/rmnp.png';

//function for start questionnaire button -> use button so onClick we navigate to questionnaire page

function Homepage() {
    return (
        <div className="homeContainer">
            <div className="header">What To Do In Denver</div>
            <div className="underHeader">
                <div style={{backgroundImage: rmnp}} className="backgroundImg">
                    <button className="questionnaireBtn">Start the questionnaire</button>
                </div>
            </div>
        </div>
    )
}

export default Homepage;