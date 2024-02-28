import React from 'react';
import { useLocation } from 'react-router-dom';
import './all.css';

function All() {
    const location = useLocation();
    const { selectedOptions, allActivities } = location.state || {};
    let activitiesExist;

    // console.log(allActivities)

    if (!allActivities || allActivities.length === 0) {
        return null; 
    } 

    // if (allActivities.length === 0) {
    //     activitiesExist = false;
    // } else {
    //     activitiesExist = true;
    // }

    console.log(activitiesExist);


    if (activitiesExist) {
    return ( 
        <div className="all">
        <div className="allContainer">
        {allActivities?.map((activity) => (
                <div key={activity.id}>
                <div className="allTitle">{activity.title}</div>
                <img className="allImg" src={activity.image} alt="All activity" />
                <div className="allActivity">
                    <div className="allDescription">{activity.description}</div>
                    <a className="allWebUrl" href={activity.webUrl} target="blank">Visit Website</a>
                </div>
                </div>
            ))}
        </div>
        </div>
    )
    } else {
    return (
        <div className="all">
            <div className="no-activities">
                <p>I'm sorry, no activities match your selections</p>
            </div>
        </div>
    )
    }
}

export default All;
