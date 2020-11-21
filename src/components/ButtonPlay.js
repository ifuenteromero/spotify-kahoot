import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonPlay = ({ text, ...restProps }) => {
  return (
    <Link className='button--primary' to='/listening' {...restProps}>
      {text}
    </Link>
  );
};

ButtonPlay.propTypes = {
  text: PropTypes.string.isRequired
};

export default ButtonPlay;
