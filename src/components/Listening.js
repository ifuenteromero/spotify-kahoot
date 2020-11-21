import React, { useContext, useEffect } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import QuestionNumber from './QuestionNumber';
import Player from './Player';
import Progress from './Progress';

const Listening = () => {
  const { getQuestion } = useContext(QuestionContext);
  useEffect(getQuestion, []);
  return (
    <div className='listening'>
      <QuestionNumber />
      <div className='progress'>
        <Progress />
      </div>
      <Player />
    </div>
  );
};

export default Listening;
