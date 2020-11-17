import React, { useContext } from 'react';
import Answer from './Answer';
import '../stylesheets/answers.scss';
import { QuestionContext } from '../contexts/QuestionContext';

const Answers = () => {
  const { test } = useContext(QuestionContext);
  return (
    <div className='answers'>
      <Answer order={1} />
      <Answer order={2} />
      <Answer order={3} />
      <Answer order={4} />
    </div>
  );
};

export default Answers;
