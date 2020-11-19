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

  const correct = () => {
    if (isValidated) {
      if (correctId === id) {
        return 'right';
      } else {
        return 'wrong';
      }
    } else {
      return '';
    }
  };
  return (
    <div
      className={`answer--${order} ${correct()}`}
      data-id={id}
      onClick={() => handleCorrect(correctId, id)}
    >
      <span className='answer__text'>{artist}</span>
      <span className='answer__text'>{name}</span>
    </div>
  );
};

Answer.propTypes = {
  answer: PropTypes.object,
  order: PropTypes.number,
  randomTrack: PropTypes.object
};
export default Answer;
