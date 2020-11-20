import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const CorrectAnswer = () => {
  const { isValidated, isCorrect } = useContext(QuestionContext);
  const correctedText = isValidated ? (isCorrect ? 'correct' : 'wrong') : '';
  return (
    <div className={`correct-answer ${correctedText}`}>{correctedText}</div>
  );
};

export default CorrectAnswer;
