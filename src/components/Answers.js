import React from 'react';
import Answer from './Answer';
import '../stylesheets/answers.scss';

const Answers = () => {
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
