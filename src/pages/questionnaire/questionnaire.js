import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questionnaire.css';

function Questionnaire() {
    const questions = [
        {
            question: "How long would you like the activity to take?",
            options: [
                { id: 1, text: "Half day" },
                { id: 2, text: "Full day" },
                { id: 3, text: "Overnight" },
            ],
        },
        {
            question: "How far from Denver would you like to travel?",
            options: [
                { id: 4, text: "Within the city" },
                { id: 5, text: "1 hour" },
                { id: 6, text: "Few hours" },
            ],
        },
        {
            question: "Would you like to do an indoor or outdoor activity?",
            options: [
                { id: 7, text: "Indoor" },
                { id: 8, text: "Outdoor" },
            ],
        },
        {
            question: "In what seasonw will you be doing the activity?",
            options: [
                { id: 9, text: "Winter" },
                { id: 10, text: "Spring" },
                { id: 11, text: "Summer" },
                { id: 12, text: "Fall" },
            ],
        }
    ]

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
                        <div>{questions.question}</div>
                        <select>
                            <option value={questions.option1}>{questions.option1}</option>
                            <option value={questions.option2}>{questions.option2}</option>
                            <option value={questions.option3}>{questions.option3}</option>
                            <option value={questions.option4}>{questions.option4}</option>
                        </select>
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