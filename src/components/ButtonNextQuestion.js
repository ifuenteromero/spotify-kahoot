import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import { Link } from 'react-router-dom';

const ButtonNextQuestion = () => {
  const { isValidated, handleNextQuestion } = useContext(QuestionContext);
  return (
    <>
      {isValidated && (
        <Link to='/listening' onClick={handleNextQuestion}>
          Next
        </Link>
      )}
    </>
  );
};

export default ButtonNextQuestion;
