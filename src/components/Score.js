import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const Score = () => {
  const { remainingTime, isValidated, isCorrect } = useContext(QuestionContext);
  const score = isCorrect ? remainingTime ** 3 : 0;
  return (
    isValidated &&
    isCorrect && <div className='correct-answer correct'>{`+${score}`}</div>
  );
};

export default Score;
