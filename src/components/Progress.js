import React, { useEffect, useState } from 'react';
import { LinearProgress } from '@material-ui/core';

const Progress = () => {
  const [value, setValue] = useState(0);
  const updateValue = () => {
    setValue(oldValue => oldValue + 1);
  };
  useEffect(() => {
    const interval = setInterval(updateValue, 50);
    return () => clearInterval(interval);
  }, []);
  return <LinearProgress variant='determinate' value={value} />;
};

export default Progress;
