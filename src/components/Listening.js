import React, { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import Player from './Player';
import Progress from './Progress';

const Listening = () => {
  const { getQuestion } = useContext(QuestionContext);
  useEffect(getQuestion, []);
  return (
    <div className='listening'>
      <Progress />
      <Player />
    </div>
  );
};

export default Listening;
