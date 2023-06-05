import React from 'react';
import './homepage.css';

function Homepage() {
    return (
        <div className="homeContainer">
            <div className="header">What To Do In Denver</div>
            <div className="underHeader">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDenver&psig=AOvVaw02_vUmQeKALT1ufN9ThipL&ust=1684523907610000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMD1hdvK__4CFQAAAAAdAAAAABAE" alt="denver" className="backgroundImg">
                    <button className="questionnaireBtn">Start the questionnaire</button>
                </img>
            </div>
        </div>
    )
}

export default Homepage;