import React from 'react';
import Answers from './Answers';
import Player from './Player';
import { ProviderQuestion } from '../contexts/QuestionContext';
import CorrectAnswer from './CorrectAnswer';
import ButtonNextQuestion from './ButtonNextQuestion';

const Question = () => {
  return (
    <ProviderQuestion>
      <div>
        <Player />
        <Answers />
        <CorrectAnswer />
        <ButtonNextQuestion />
      </div>
    </ProviderQuestion>
  );
};

export default Question;
