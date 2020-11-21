import React, { useContext, useEffect, useRef, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { QuestionContext } from '../contexts/QuestionContext';
import '../stylesheets/timer.scss';

const Timer = () => {
  const {
    isValidated,
    handleCorrect,
    remainingTime,
    setRemainingTime
  } = useContext(QuestionContext);

  const intervalRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(time => {
        if (time > 0) return time - 1;
        else {
          clearInterval(interval);
          if (!isValidated) handleCorrect();
          return time;
        }
      });
    }, 1000);

    intervalRef.current = interval;
  }, []);

  useEffect(() => {
    if (isValidated) {
      clearInterval(intervalRef.current);
    }
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
