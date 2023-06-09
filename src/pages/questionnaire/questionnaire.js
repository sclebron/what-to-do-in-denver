import React from 'react';
import { useNavigate } from 'react-router-dom';
import './questionnaire.css';

function Questionnaire() {
    const navigate = useNavigate();

    const navigateToAll = () => {
        navigate('/all');
    }

    const navigateToRandom = () => {
        navigate('/random');
    }

    return (
        <div className="questionnaireContainer">
            
        </div>
    )
}

export default Questionnaire;

//use useNavigation to create a function to redirect to new page onSubmit of button after completing questionnaire