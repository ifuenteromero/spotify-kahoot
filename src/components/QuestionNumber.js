import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const QuestionNumber = () => {
  const { questionNumber, maxQuestions } = useContext(QuestionContext);
  return (
    <div className='question-number'>{`${questionNumber} of ${maxQuestions}`}</div>
  );
};

export default QuestionNumber;
