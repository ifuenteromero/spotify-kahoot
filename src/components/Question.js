import React, { useContext, useEffect } from 'react';
import Answers from './Answers';
import CorrectAnswer from './CorrectAnswer';
import ButtonNextQuestion from './ButtonNextQuestion';
import { QuestionContext } from '../contexts/QuestionContext';
import Timer from './Timer';
import Sound from './Sound';

const Question = () => {
  const { resetQuestions } = useContext(QuestionContext);

  useEffect(() => {
    return () => resetQuestions();
  }, []);

  return (
    <div className='question'>
      <Timer />
      <Answers />
      <Sound />
      <CorrectAnswer />
      <ButtonNextQuestion />
    </div>
  );
};

export default Question;
