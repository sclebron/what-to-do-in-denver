import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questionnaire.css';

function Questionnaire() {
    const [selectedOptions, setSelectedOptions] = useState([]);

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

    const navigate = useNavigate();

    const navigateToAll = () => {
        navigate('/all');
    }

    const navigateToRandom = () => {
        navigate('/random');
    }

    // const CheckboxOptions = () => {
    //     const [selectedOptions, setSelectedOptions] = useState([]);

    // const options = [
    //     { id: 1, label: 'Option 1' },
    //     { id: 2, label: 'Option 2' },
    //     { id: 3, label: 'Option 3' },
    // ];

    // const handleCheckboxChange = (optionId) => {
    //     setSelectedOptions((prevSelectedOptions) => {
    //         if (prevSelectedOptions.includes(optionId)) {
    //             return prevSelectedOptions.filter((id) => id !==optionId);
    //         } else {
    //             return [...prevSelectedOptions, optionId];
    //         }
    //     });
    // };

    // return (
    //     <div>
    //       <h2>Select Options using Checkboxes</h2>
    //       {options.map((option) => (
    //         <label key={option.id}>
    //           <input
    //             type="checkbox"
    //             checked={selectedOptions.includes(option.id)}
    //             onChange={() => handleCheckboxChange(option.id)}
    //           />
    //           {option.label}
    //         </label>
    //       ))}
    //       </div>

        //       <label key={option.id}>
    //           <input
    //             type="checkbox"
    //             checked={selectedOptions.includes(option.id)}
    //             onChange={() => handleCheckboxChange(option.id)}
    //           />
    //           {option.label}
    //         </label>
    // )

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
                                onChange={() => handleCheckboxChange(option.id)}
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