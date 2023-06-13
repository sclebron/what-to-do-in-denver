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
            <div className="header">What To Do In Denver</div>
            <div className="underHeader">
                <div style={{ backgroundImage: `url(${rmnp})` }} className="backgroundImg">
                    <button onClick={navigateToQ} className="questionnaireBtn">Start the questionnaire</button>
                </div>
            </div>
        </div>
    )

}

export default Homepage;