/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const Sound = () => {
  const { soundRef } = useContext(QuestionContext);
  return (
    <audio ref={soundRef}>
      <source type='audio/mpeg' />
    </audio>
  );
};

export default Sound;
