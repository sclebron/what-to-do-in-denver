import React from 'react';
import './all.css';

function All(props) {

    // const { allActivities } = props.location.state;

    // const { allActivities } = props.allActivities;

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

//pushToAllActivities is now working, just need to figure out where to call that function and how to make the allActivities array show up on the all page and not the questionnaire page then make random page display one random activity then deploy this to github pages and then can add this project to resume
