import React, { useContext, useEffect } from 'react';
import Answers from './Answers';
import CorrectAnswer from './CorrectAnswer';
import ButtonNextQuestion from './ButtonNextQuestion';
import { QuestionContext } from '../contexts/QuestionContext';

const Question = () => {
  const { resetQuestions } = useContext(QuestionContext);
  useEffect(() => {
    return () => resetQuestions();
  }, []);
  return (
    <div>
      <Answers />
      <CorrectAnswer />
      <ButtonNextQuestion />
    </div>
  );
};

export default Question;
