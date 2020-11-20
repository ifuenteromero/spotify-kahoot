import React, { useContext, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import '../stylesheets/timer.scss';
import { QuestionContext } from '../contexts/QuestionContext';
import { getSound } from '../utils/useFulFunctions';

const Timer = () => {
  const { handleValidate, soundRef } = useContext(QuestionContext);
  const [remainingTime, setRemainingTime] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(currentTime => {
        if (currentTime > 0) {
          currentTime = currentTime - 1;
          return currentTime;
        } else {
          clearInterval(interval);
          const wrong = getSound('wrong');
          soundRef.current.src = wrong;
          soundRef.current.play();
          handleValidate();
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const value = 100 - remainingTime * 10;
  return (
    <div className='timer'>
      <CircularProgress variant='static' value={value} />
      <span className='timer__text'>{remainingTime}</span>
    </div>
  );
};

export default Timer;
