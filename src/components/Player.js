import React, { useContext } from 'react';
import '../stylesheets/player.scss';
import { QuestionContext } from '../contexts/QuestionContext';

const Player = () => {
  const { randomTrack, playerRef } = useContext(QuestionContext);
  return (
    <>
      {randomTrack && (
        <audio controls ref={playerRef} autoPlay className='player'>
          <source src={randomTrack?.preview_url} type='audio/mpeg' />
        </audio>
      )}
    </>
  );
};

export default Player;
