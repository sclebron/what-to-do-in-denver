import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';

function Homepage() {
    const navigate = useNavigate();

    const navigateToQ = () => {
        navigate('/questionnaire')
    }

    return (
        <div className="home">
            <div className="header">What To Do In Denver</div>
            <button onClick={navigateToQ} className="questionnaireBtn">Start the questionnaire</button>
        </div>
    )

}

export default Homepage;