import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import { Link } from 'react-router-dom';
import '../stylesheets/buttons.scss';

const ButtonNextQuestion = () => {
  const {
    isValidated,
    handleNextQuestion,
    questionNumber,
    maxQuestions
  } = useContext(QuestionContext);
  const linkUrl = questionNumber < maxQuestions ? '/listening' : '/finish';
  return (
    <>
      {isValidated && (
        <Link
          to={linkUrl}
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
