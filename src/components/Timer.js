import React, { useContext, useEffect, useRef } from 'react';
import { CircularProgress } from '@material-ui/core';
import { QuestionContext } from '../contexts/QuestionContext';
import '../stylesheets/timer.scss';
import { getSound } from '../utils/useFulFunctions';

const Timer = () => {
  const {
    isValidated,
    handleCorrect,
    remainingTime,
    setRemainingTime,
    soundRef
  } = useContext(QuestionContext);

  const intervalRef = useRef();

  const handleTimerSound = number => {
    const soundName = number % 2 ? 'tac' : 'tic';
    const sound = getSound(soundName);
    soundRef.current.src = sound;
    soundRef.current.play();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(time => {
        if (time > 0) {
          handleTimerSound(time);
          return time - 1;
        } else {
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

  //   const value = 100 - remainingTime * 10;
  const value = remainingTime * 10;
  return (
    <div className='timer'>
      <CircularProgress variant='static' value={value} />
      <span className='timer__text'>{remainingTime}</span>
    </div>
  );
};

export default Timer;
