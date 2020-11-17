import React, { useContext, useEffect, useRef, useState } from 'react';
import { http } from '../services/httpService';
import '../stylesheets/player.scss';
import { getRandomNumber, getRandomNumbers } from '../utils/useFulFunctions';
import endPoints, { tracksFromPlayList } from '../utils/spotifyUrls';
import { QuestionContext } from '../contexts/QuestionContext';

const Player = () => {
  const { tracks } = useContext(QuestionContext);
  const playerRef = useRef();
  const numberAnswers = 4;
  const [randomTrack, setRandomTrack] = useState({
    id: null,
    preview_url: null
  });

  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    pauseTrack();
    getRandomAnswers();
  }, [tracks]);

  const pauseTrack = () => {
    const trackDuration = 5000;
    setTimeout(() => {
      playerRef.current.pause();
    }, trackDuration);
  };

  const getRandomAnswers = () => {
    const randomNumbers = getRandomNumbers(numberAnswers, tracks.length);
    const _answers = randomNumbers.map(number => tracks[number]);
    const randomNumber = getRandomNumber(0, 4);
    setRandomTrack(tracks[randomNumbers[randomNumber]]);
    setAnswers(_answers);
  };

  return (
    <>
      {randomTrack && (
        <audio controls ref={playerRef} autoPlay className='player'>
          <source src={randomTrack.preview_url} type='audio/mpeg' />
        </audio>
      )}
    </>
  );
};

export default Player;
