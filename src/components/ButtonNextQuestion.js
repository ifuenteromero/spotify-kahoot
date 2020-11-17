import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const ButtonNextQuestion = () => {
  const { isValidated, handleNextQuestion } = useContext(QuestionContext);
  return (
    <>
      {isValidated && (
        <button type='button' onClick={handleNextQuestion}>
          Next
        </button>
      )}
    </>
  );
};

export default ButtonNextQuestion;
