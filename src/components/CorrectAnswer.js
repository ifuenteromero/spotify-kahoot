import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const CorrectAnswer = () => {
  const { isValidated, isCorrect } = useContext(QuestionContext);
  const correctedText = isValidated ? (isCorrect ? 'correct' : 'wrong') : '';
  return <div>{correctedText}</div>;
};

export default CorrectAnswer;
