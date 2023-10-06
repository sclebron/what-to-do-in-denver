import React from 'react';
import './all.css';
import { all, allActivities } from '/Users/sophielebron/Desktop/coding-projects/what-to-do-in-front/src/pages/questionnaire/questionnaire.js';

function All() {

    return (
        <div className="all">
        <div className="allContainer">
        {allActivities.map((activity) => (
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


    //if the activity is true for that specific selection then push it to the allActivities array

    // if (Option.id === checked) {
    //     all.map((all) => {
    //         if (all.halfDay === true) {
    //         allActivities.push();
    //     }
    //     return allActivities;
    //     })
    // }

    // console.log(allActivities);

    //if user selection for that thing (e.g. "half day") is true && that element is true for a specific activity, then push that activity to a new array

    // all.map((all) => {
    //     if(option.id === checked && all.halfDay === true) {
    //         allActivities.push();
    //     }
    //     return allActivities;
    // })

    // console.log(allActivities);