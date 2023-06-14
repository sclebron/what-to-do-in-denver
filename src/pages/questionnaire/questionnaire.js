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
                    
                ))}
            </div>
        </div>
    )
}

export default Questionnaire;

//use useNavigation to create a function to redirect to new page onSubmit of button after completing questionnaire