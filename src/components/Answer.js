import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ order }) => {
  return <div className={`answer--${order}`}>Answer</div>;
};

Answer.propTypes = {
  order: PropTypes.number
};
export default Answer;
