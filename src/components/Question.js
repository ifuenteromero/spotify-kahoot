import React from 'react';
import Answers from './Answers';
import Player from './Player';
import { ProviderQuestion } from '../contexts/QuestionContext';
import CorrectAnswer from './CorrectAnswer';

const Question = () => {
  return (
    <ProviderQuestion>
      <div>
        <Player />
        <Answers />
        <CorrectAnswer />
      </div>
    </ProviderQuestion>
  );
};

export default Question;
