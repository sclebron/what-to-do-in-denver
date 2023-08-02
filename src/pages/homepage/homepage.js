import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import rmnp from './images/rmnp.png';

function Homepage() {
    const navigate = useNavigate();

    const navigateToQ = () => {

    navigate('/questionnaire')

}

    return (
        <div className="homeContainer">
                <div style={{ backgroundImage: `url(${rmnp})` }} className="backgroundImg">
                    <text className="header">What To Do In Denver</text>
                    <button onClick={navigateToQ} className="questionnaireBtn">Start the questionnaire</button>
                </div>
        </div>
    )

}

export default Homepage;