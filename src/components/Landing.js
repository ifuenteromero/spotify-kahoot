import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/buttons.scss';

const Landing = () => {
  return (
    <div className='landing'>
      <Link className='button-primary' to='/listening'>
        Play
      </Link>
    </div>
  );
};

export default Landing;
