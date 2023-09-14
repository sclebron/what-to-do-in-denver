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
    },
    {
        "title": "Visit Denver Museum of Nature & Science",
        "image": "https://media2.westword.com/den/imager/u/slideshow/10120352/dmnsdino.jpg",
        "description": "Learn about everything from dinosaurs to astronomy at the Denver Museum of Nature & Science!",
        "details": "The Denver Museum of Nature & Science is located in City Park, near the Denve Zoo. Tickets can be purchased online prior to visiting the museum.",
        "webUrl": "https://www.dmns.org/",
        "length": "Half day",
        "distance": "Within the city",
        "place": "Indoors",
        "season": "Winter, Spring, Summer, Fall"
    }
]

//have json of activities here -> if activity has thing that was selected included then add it to empty array(?) of activities that will be displayed

function All() {
    return (
        <div className="all">
        <div className="allContainer">
        {all.map((all) => (
                <>
                <div className="allTitle">{all.title}</div>
                <img className="allImg" src={all.image} alt="All activity" />
                <div className="allActivity">
                    <div className="allDescription">{all.description}</div>
                    <a className="allWebUrl" href={all.webUrl} target="blank">Visit Website</a>
                </div>
                </>
            ))}
        </div>
        </div>
    )
}

export default All;