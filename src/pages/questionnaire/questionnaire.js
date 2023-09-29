import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questionnaire.css';
import All from './all/all.js';

function Questionnaire() {
    const [selectedOptions, setSelectedOptions] = useState([]);

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
            "season": "Winter",
            "halfDay": true,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "1hr": true,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": false,
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
            "season": "Winter, Spring, Summer, Fall",
            "halfday": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "1hr": false,
            "fewHours": false,
            "indoors": true,
            "outdoors": false,
            "winter": true,
            "spring": true,
            "summer": true,
            "fall": true,
        },
        {
            "title": "Go to a Rockies Game at Coors Field",
            "image": "https://assets.simpleviewinc.com/simpleview/image/upload/crm/denver/Colorado-Rockies_7C649933-EFF0-51B0-9A02E85385D86848_7c6e2c50-dc33-ec19-aec679274174a195.jpg",
            "description": "Watch the Rockies play at the iconic Coors Field. There are lots of bars and restaurants nearby to visit before or after the game!",
            "details": "Tickets can be purchased ahead of time online, or at Coors Field. Coors Field is 2 blocks away from Union Station, so the light rail or train into Union Station is a good transportation option to get to Coors Field.",
            "webUrl": "https://www.mlb.com/rockies/ballpark",
            "length": "Half day",
            "distance": "Within the city",
            "place": "Outdoors",
            "season": "Spring, Summer",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "1hr": false,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": false,
            "spring": true,
            "summer": true,
            "fall": false,
        },
        {
            "title": "Ski at Steamboat Ski Resort",
            "image": "https://www.steamboat-springs.com/assets/page_headers/Steamboat_Ski_Resort.jpg",
            "description": "Ski during the day or night at Steamboat Ski Resort!",
            "details": "Steamboat Springs is located about 150 miles form Denver. Steamboat is on the Ikon Pass, although the base pass only allows limited days at Steamboat. Lift tickets can be purchased ahead of time online, or at the resort.",
            "webUrl": "https://www.steamboat.com/",
            "length": "Full day, overnight",
            "distance": "Few hours",
            "place": "Outdoors",
            "season": "Winter",
            "halfDay": false,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "1hr": false,
            "fewHours": true,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": false,
        },
        {
            "title": "Go to Broncos Game at Mile High",
            "image": "https://www.stadiumsofprofootball.com/wp-content/uploads/2016/07/milehigh21951.jpg",
            "description": "See the Broncos play at Empower Field at Mile High Stadium.",
            "details": "Last minute tickets to Broncos games can be purchased on resell sites such as Ticketmaster or Stubhub. There are several parking lots at Mile High, so driving is an option, which is a good option if you plan on tailgating! Another transportation option is the C light rail, although this will include a short walk.",
            "webUrl": "https://www.empowerfieldatmilehigh.com/events-tickets/denver-broncos",
            "length": "Half day",
            "distance": "Within the city",
            "place": "Outdoors",
            "season": "Fall, Winter",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "1hr": false,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": true,
        },
        {
            "title": "Go to an Avalanche Game",
            "image": "https://kdvr.com/wp-content/uploads/sites/11/2022/06/GettyImages-1403173601.jpg?w=2560&h=1440&crop=1",
            "description": "See Colorado's NHL team play at Ball Arena.",
            "details": "Ball Arena is located in downtown Denver, and can be accessed by the light rail. Tickets to an Avalanche game can be purchased ahead of time online. Popular games typically sell out, but the average game usually has tickets available for purchase at Ball Arena.",
            "webUrl": "https://www.nhl.com/avalanche",
            "length": "Half day",
            "distance": "Within the city",
            "place": "Indoors",
            "season": "Fall, Winter",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "1hr": false,
            "fewHours": false,
            "indoors": true,
            "outdoors": false,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": true,
        },
        {
            "title": "Ski at Winter Park",
            "image": "https://res.cloudinary.com/miles-extranet-dev/image/upload/v1582130613/Winter_Park/account_photos/45/5b529c7b4d8857a8d81c9a2117ee42aa_2019_WP_CharlesStemen_DSC024631.jpg",
            "description": "Winter Park is a very beginner friendly ski resort located just 75 miles from Denver.",
            "details": "Winter Park is on the Ikon Pass, or if you don't have an Ikon Pass you can purchase a lift ticket online ahead of time or at Winter Park. The Winter Park Express is a seasonal train that runs on weekends from January-April. It takes passengers from Union Station directly to Winter Park Resort.",
            "webUrl": "https://www.winterparkresort.com/",
            "length": "Half day, full day, overnight",
            "distance": "1hr",
            "place": "Outdoors",
            "season": "Winter",
            "halfDay": true,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "1hr": true,
            "fewHours": false,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": false,
        },
        {
            "title": "Ski at Aspen Snowmass Ski Resort",
            "image": "https://www.aspensnowmass.com/-/media/aspen-snowmass/images/hero/hero-image/winter/2021-22/snowmass-hero-08182021.jpg?mw=1506&mh=930&hash=8711362070C02D29B00C0D09593FB504",
            "description": "Ski at one of the four resorts (Aspen, Aspen Highlands, Snowmass, and Buttermilk) that make up the Aspen Snowmass Ski Resort!",
            "details": "Lift tickets for Aspen Snowmass must be purchased online ahead of time, as this resort requires reservations. Aspen Snowmass is on the Ikon Pass, but the reservation is still required with the Ikon Pass. The resort is about 200 miles from Denver. Buttermilk is the most beginner friendly of the four mountains, Aspen and Snowmass are best suited for intermediate skiers, and Aspen Highlands is for advanced skiers.",
            "webUrl": "https://www.aspensnowmass.com/",
            "length": "Full day, overnight",
            "distance": "Few hours",
            "place": "Outdoors",
            "season": "Winter",
            "halfDay": false,
            "fullDay": true,
            "overnight": true,
            "inCity": false,
            "1hr": false,
            "fewHours": true,
            "indoors": false,
            "outdoors": true,
            "winter": true,
            "spring": false,
            "summer": false,
            "fall": false,
        },
        {
            "title": "Go to a Nuggets Game at Ball Arena",
            "image": "https://www.denverpost.com/wp-content/uploads/2023/06/TDP-L-NUGGS-HEAT-GAME-ONE_DSC5093.jpg?w=1024",
            "description": "See Denver's NBA team, the Nuggets, play at Ball Arena.",
            "details": "Tickets can be purchased online before the game, or last minute tickets can often be purchased at Ball Arena. Ball Arena is located in downtown Denver, can be accessed by the light rail.",
            "webUrl": "https://www.ballarena.com/",
            "length": "Half day",
            "distance": "Within the city",
            "place": "Indoors",
            "season": "Fall, Winter, Spring",
            "halfDay": true,
            "fullDay": false,
            "overnight": false,
            "inCity": true,
            "1hr": false,
            "fewHours": false,
            "indoors": true,
            "outdoors": false,
            "winter": true,
            "spring": true,
            "summer": false,
            "fall": true,
        },
    ]

    const questions = [
        {
            question: "How long would you like the activity to take?",
            options: [
                { id: 1, label: "Half day" },
                { id: 2, label: "Full day" },
                { id: 3, label: "Overnight" },
            ],
        },
        {
            question: "How far from Denver would you like to travel?",
            options: [
                { id: 4, label: "Within the city" },
                { id: 5, label: "1 hour" },
                { id: 6, label: "Few hours" },
            ],
        },
        {
            question: "Would you like to do an indoor or outdoor activity?",
            options: [
                { id: 7, label: "Indoors" },
                { id: 8, label: "Outdoors" },
            ],
        },
        {
            question: "In what season will you be doing the activity?",
            options: [
                { id: 9, label: "Winter" },
                { id: 10, label: "Spring" },
                { id: 11, label: "Summer" },
                { id: 12, label: "Fall" },
            ],
        }
    ]

    const handleCheckboxChange = (optionId) => {
        setSelectedOptions((prevSelectedOptions) => {
            if (prevSelectedOptions.includes(optionId)) {
                return prevSelectedOptions.filter((id) => id !==optionId);
            } else {
                return [...prevSelectedOptions, optionId];
            }
        });
    };

    const allActivities = [];

    //create function so that when a option is selected (onChange) then we map through all and if it is true than we push to allActivities. add this function to happen in the return on onChange

    const pushToAllActivities = () => {
        all.map((all) => {
            if(all.option.id === true) {
                allActivities.push();
            }
        })
        console.log(allActivities);
    }

    // function handleCheckboxChange(value, e) {
    //     if (e.target.checked) {
    //         let selectedData = data.filter((d) => d.model === value);
    
    //         setAllActivities([...allActivities, ...selectedData]);
    //     } else {
    //         let unselected = allActivities.filter((d) => {
    //         return d.model !== value;
    //     });
    //         setAllActivities(uncheckedData);
    //     }
    // }

    const navigate = useNavigate();

    const navigateToAll = () => {
        navigate('/all');
    }

    const navigateToRandom = () => {
        navigate('/random');
    }

    return (
        <div className="questionnaire">
        <div className="questionnaireContainer">
            <div className="qTitle">Questionnaire</div>
            <div className="questions">
                {questions.map((questions) => (
                    <div className="question">
                        <div className="questionOnly">{questions.question}</div>
                        {questions.options.map((option) => (
                        <label key={option.id} className="options">
                            <input 
                                type="checkbox"
                                className="selectbox"
                                checked={selectedOptions.includes(option.id)}
                                onChange={() => handleCheckboxChange(option.id) && pushToAllActivities()}
                            />
                            {option.label}
                        </label>
                        ))}
                    </div>
                ))}
            </div>
            <div className="buttons">
                    <button onClick={navigateToAll} className="allBtn">All Activities</button>
                    <button onClick={navigateToRandom} className="randomBtn">Random Activity</button>
            </div>
        </div>
        </div>
    )
}

export default Questionnaire;