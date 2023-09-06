import React from 'react';
import './all.css';

const all = [
    {
        "title": "Ski at Copper Mountain",
        "image": "https://cdn.5280.com/2022/12/00_Copper-50th_hero-2022-960x720.jpg",
        "description": "Copper mountain has ski runs for all levels, with the West side of the mountain perfect for beginners, and the East side perfect for more advanced skiers.",
        "details": "Copper Mountain is 80 miles west of Denver. There is a bus (SnowStang) that can take you from Denver Union Station or Denver Federal Center to Copper Mountain. If you're planning to drive to Copper Mountain on a weekend, be sure to leave very early, as there will be traffic! Lift tickets can be purchased in advance or on the mountain. You can use your Ikon Pass if you have one! ",
        "webUrl": "https://www.coppercolorado.com/?gad=1&gclid=CjwKCAjwvJyjBhApEiwAWz2nLTRE0uQhhwPWLZodgz0BoOK4v_snaemFEBG_UMGRDX9AMDrQrzfRsBoCYlYQAvD_BwE&gclsrc=aw.ds",
        "length": "Half day, full day, overnight",
        "distance": "1hr",
        "place": "Outdoors",
        "season": "Winter"
    }
]

//have json of activities here -> if activity has thing that was selected included then add it to empty array(?) of activities that will be displayed

function All() {
    return (
        <div className="all">
        <div className="allContainer">
        {all.map((all) => (
                <>
                <div className="randomTitle">{all.title}</div>
                <img className="randomImg" src={all.image} alt="Random activity" />
                <div className="randomActivity">
                    <div className="randomDescription">{all.description}</div>
                    <a className="randomWebUrl" href={all.webUrl} target="blank">Visit Website</a>
                </div>
                </>
            ))}
        </div>
        </div>
    )
}

export default All;