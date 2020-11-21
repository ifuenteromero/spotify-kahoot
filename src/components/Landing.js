import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/buttons.scss';
import ButtonPlay from './ButtonPlay';

const Landing = () => {
  return (
    <div className='landing'>
      <ButtonPlay text='Play' />
    </div>
  );
};

export default Landing;
