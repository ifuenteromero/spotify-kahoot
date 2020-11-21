import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';

const Finish = () => {
  const { totalScore } = useContext(QuestionContext);
  return <div>{`Your score is ${totalScore}`}</div>;
};

export default Finish;
