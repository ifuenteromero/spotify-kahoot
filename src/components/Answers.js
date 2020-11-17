import React, { useContext } from 'react';
import Answer from './Answer';
import '../stylesheets/answers.scss';
import { QuestionContext } from '../contexts/QuestionContext';

const Answers = () => {
  const { answers } = useContext(QuestionContext);
  console.log({ answers });
  return (
    <div className='answers'>
      {answers.map((answer, key) => (
        <Answer key={key} order={key + 1} answer={answer} />
      ))}
    </div>
  );
};

export default Answers;
