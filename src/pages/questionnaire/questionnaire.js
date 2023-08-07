import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questionnaire.css';

function Questionnaire() {
    const questions = [
        {
            question: "How long would you like the activity to take?",
            option1: "Half day",
            option2: "Full day",
            option3: "Overnight",
            option4: ""
        },
        {
            question: "How far from Denver would you like to travel?",
            option1: "Within the city",
            option2: "1 hour",
            option3: "Few hours",
            option4: ""
        },
        {
            question: "Would you like to do an indoor or outdoor activity?",
            option1: "Indoor",
            option2: "Outdoor",
            option3: "",
            option4: ""
        },
        {
            question: "In what seasonw will you be doing the activity?",
            option1: "Winter",
            option2: "Spring",
            option: "Summer",
            option4: "Fall"
        }
    ]

    const navigate = useNavigate();

    const navigateToAll = () => {
        navigate('/all');
    }

    const navigateToRandom = () => {
        navigate('/random');
    }

    const CheckboxOptions = () => {
        const [selectedOptions, setSelectedOptions] = useState([]);

    const options = [
        { id: 1, label: 'Option 1' },
        { id: 2, label: 'Option 2' },
        { id: 3, label: 'Option 3' },
    ];

    const handleCheckboxChange = (optionId) => {
        setSelectedOptions((prevSelectedOptions) => {
            if (prevSelectedOptions.includes(optionId)) {
                return prevSelectedOptions.filter((id) => id !==optionId);
            } else {
                return [...prevSelectedOptions, optionId];
            }
        });
    };

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
    // )

    return (
        <div className="questionnaire">
        <div className="questionnaireContainer">
            <div className="qTitle">Questionnaire</div>
            <div className="questions">
                {questions.map((questions) => (
                    <div className="question">
                        <div>{questions.question}</div>
                        {/* <select>
                            <option value={questions.option1}>{questions.option1}</option>
                            <option value={questions.option2}>{questions.option2}</option>
                            <option value={questions.option3}>{questions.option3}</option>
                            <option value={questions.option4}>{questions.option4}</option>
                        </select> */}
                    </div>
                ))}
            </div>
            <div className="buttons">
                    <button onSubmit={navigateToAll} className="allBtn">All Activities</button>
                    <button onSubmit={navigateToRandom} className="randomBtn">Random Activity</button>
            </div>
        </div>
        </div>
    )
}
}

export default Questionnaire;