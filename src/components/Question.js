import React from 'react';
import Answers from './Answers';
import Player from './Player';
import { ProviderQuestion } from '../contexts/QuestionContext';

const Question = () => {
  return (
    <ProviderQuestion>
      <div>
        <Player />
        <Answers />
      </div>
    </ProviderQuestion>
  );
};

export default Question;
