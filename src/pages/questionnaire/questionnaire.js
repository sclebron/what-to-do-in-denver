import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questionnaire.css';

function Questionnaire() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    // const [allActivities, setAllActivities] = useState([]);

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
            "halfDay": true
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
            "halfday": true
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
            "halfDay": true
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
            "halfDay": false
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
                { id: 7, label: "Indoor" },
                { id: 8, label: "Outdoor" },
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