import React, { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import Player from './Player';

const Listening = () => {
  const { getQuestion } = useContext(QuestionContext);
  useEffect(getQuestion, []);
  return <Player />;
};

export default Listening;
