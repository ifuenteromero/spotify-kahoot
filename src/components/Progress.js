import React, { useContext, useEffect, useState } from 'react';
import { LinearProgress } from '@material-ui/core';
import { QuestionContext } from '../contexts/QuestionContext';

const Progress = () => {
  const { trackDuration } = useContext(QuestionContext);
  const [value, setValue] = useState(0);
  const intervalDuration = trackDuration / 100;
  const updateValue = () => {
    setValue(oldValue => oldValue + 1);
  };
  useEffect(() => {
    const interval = setInterval(updateValue, intervalDuration);
    return () => clearInterval(interval);
  }, []);
  return <LinearProgress variant='determinate' value={value} />;
};

export default Progress;
