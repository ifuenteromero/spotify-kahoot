import React, { useContext, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { QuestionContext } from '../contexts/QuestionContext';
import '../stylesheets/timer.scss';

const Timer = () => {
  const { isValidated, handleCorrect } = useContext(QuestionContext);
  const [remainingTime, setRemainingTime] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(currentTime => {
        if (currentTime > 0 && !isValidated) {
          currentTime = currentTime - 1;
          return currentTime;
        } else {
          clearInterval(interval);
          handleCorrect();
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isValidated]);

  const value = 100 - remainingTime * 10;
  return (
    <div className='timer'>
      <CircularProgress variant='static' value={value} />
      <span className='timer__text'>{remainingTime}</span>
    </div>
  );
};

export default Timer;
