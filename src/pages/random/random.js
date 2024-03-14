import React from 'react';
import { useLocation } from 'react-router-dom';
import './random.css';

function Random() {
    const location = useLocation();
    const { selectedOptions, allActivities } = location.state || {};
    let activitiesExist;

    if (!allActivities || allActivities.length === 0) {
        activitiesExist = false;
    } else {
        activitiesExist = true;
    }

    let random = [allActivities[ (Math.floor(Math.random() * allActivities.length))]];

    console.log(random);

    if (activitiesExist) {
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
    } else {
    return (
        <div className="random">
            <div className="no-activities">
                <p>I'm sorry, no activities match your selections</p>
            </div>
        </div>
    )
    }
}

export default Random;