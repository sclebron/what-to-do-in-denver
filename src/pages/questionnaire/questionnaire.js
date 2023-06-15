import React from 'react';
import { useNavigate } from 'react-router-dom';
import './questionnaire.css';

function Questionnaire() {
    const questions = [
        {
            question: "",
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        }
    ]

    const navigate = useNavigate();

    const navigateToAll = () => {
        navigate('/all');
    }

    const navigateToRandom = () => {
        navigate('/random');
    }

    return (
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
                    <button onSubmit={navigateToAll} className="allBtn">All Activities</button>
                    <button onSubmit={navigateToRandom} className="randomBtn">Random Activity</button>
            </div>
        </div>
    )
}

export default Questionnaire;