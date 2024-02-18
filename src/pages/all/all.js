import React from 'react';
import './all.css';

function All(props) {
    const { allActivities } = props;

    console.log(allActivities)

    if (!allActivities || allActivities.length === 0) {
        return null; 
    }

    return (
        <div className="all">
        <div className="allContainer">
        {allActivities?.map((activity) => (
                <li key={activity.id}>
                <div className="allTitle">{activity.title}</div>
                <img className="allImg" src={activity.image} alt="All activity" />
                <div className="allActivity">
                    <div className="allDescription">{activity.description}</div>
                    <a className="allWebUrl" href={activity.webUrl} target="blank">Visit Website</a>
                </div>
                </li>
            ))}
        </div>
        </div>
    )
}

export default All;
