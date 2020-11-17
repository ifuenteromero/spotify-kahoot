import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ order, answer }) => {
  const name = answer?.name;
  const artist = answer?.artists.map(artist => artist.name).join(' & ');
  return (
    <div className={`answer--${order}`}>
      <span className='answer__text'>{artist}</span>
      <span className='answer__text'>{name}</span>
    </div>
  );
};

Answer.propTypes = {
  answer: PropTypes.object,
  order: PropTypes.number
};
export default Answer;
