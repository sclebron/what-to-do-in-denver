import React from 'react';
import { useLocation } from 'react-router-dom';
import './random.css';

function Random() {
    const location = useLocation();
    const { selectedOptions, allActivities } = location.state || {};

    console.log(allActivities)

    if (!allActivities || allActivities.length === 0) {
        return null; 
    }

    let random = allActivities[ (Math.floor(Math.random() * allActivities.length))];

    return (
        <div className="random">
        <div className="randomContainer">
            {random.map((random) => (
                <>
                <div className="randomTitle">{random.title}</div>
                <img className="randomImg" src={random.image} alt="Random activity" />
                <div className="randomActivity">
                    <div className="randomDescription">{random.description}</div>
                    <a className="randomWebUrl" href={random.webUrl} target="blank">Visit Website</a>
                </div>
                </>
            ))}
        </div>
        </div>
    )
}

export default Random;