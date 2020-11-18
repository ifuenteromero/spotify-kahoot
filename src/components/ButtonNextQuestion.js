import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import { Link } from 'react-router-dom';
import '../stylesheets/buttons.scss';

const ButtonNextQuestion = () => {
  const { isValidated, handleNextQuestion } = useContext(QuestionContext);
  return (
    <>
      {isValidated && (
        <Link
          to='/listening'
          className='button--secondary'
          onClick={handleNextQuestion}
        >
          Next
        </Link>
      )}
    </>
  );
};

export default ButtonNextQuestion;
