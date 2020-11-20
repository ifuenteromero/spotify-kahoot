import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuestionContext } from '../contexts/QuestionContext';

const Answer = ({ order, answer }) => {
  const { randomTrack, isValidated, handleCorrect } = useContext(
    QuestionContext
  );

  const name = answer?.name;
  const artist = answer?.artists.map(artist => artist.name).join(' & ');
  const id = answer?.id;
  const correctId = randomTrack?.id;
  const _isCorrect = correctId === id;
  const correctedClassName = _isCorrect ? 'right' : 'wrong';
  const validatedClassName = isValidated ? correctedClassName : '';

  return (
    <button
      className={`answer--${order} ${validatedClassName}`}
      data-id={id}
      disabled={isValidated}
      onClick={() => handleCorrect(correctId === id)}
    >
      <span className='answer__text'>{artist}</span>
      <span className='answer__text'>{name}</span>
    </button>
  );
};

Answer.propTypes = {
  answer: PropTypes.object,
  order: PropTypes.number
};
export default Answer;
