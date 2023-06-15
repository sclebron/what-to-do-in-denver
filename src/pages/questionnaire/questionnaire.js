import React from 'react';
import { useNavigate } from 'react-router-dom';
import './questionnaire.css';

function Questionnaire() {
    const questions = [
        {
            question: "",
            option1: "",
            option2: ""
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
                            <option></option>
                            <option></option>
                            <option></option>
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