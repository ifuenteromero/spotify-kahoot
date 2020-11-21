import React, { useContext } from 'react';
import { QuestionContext } from '../contexts/QuestionContext';
import ButtonPlay from './ButtonPlay';

const Finish = () => {
  const { totalScore, resetGame } = useContext(QuestionContext);
  return (
    <div className='finish'>
      <div>{`Your score is ${totalScore}`}</div>
      <ButtonPlay text='Play Again' onClick={resetGame} />
    </div>
  );
};

export default Finish;
