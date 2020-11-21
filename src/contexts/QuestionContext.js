import React, { useState, createContext, useEffect, useRef } from 'react';
import { http } from '../services/httpService';
import endPoints, { tracksFromPlayList } from '../utils/spotifyUrls';
import {
  getRandomNumber,
  getRandomNumbers,
  getSound
} from '../utils/useFulFunctions';
import { useHistory } from 'react-router-dom';
export const QuestionContext = createContext();

export const ProviderQuestion = props => {
  const history = useHistory();
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const { userPlayLists } = endPoints;
  const playerRef = useRef();
  const soundRef = useRef();
  const numberAnswers = 4;
  const trackDuration = 5000;
  const [tracks, setTracks] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [isValidated, setIsValidated] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [remainingTime, setRemainingTime] = useState(10);
  const maxQuestions = 2;

  const [randomTrack, setRandomTrack] = useState({
    id: null,
    preview_url: null
  });

  useEffect(() => {
    getTracks();
  }, []);

  const getQuestion = () => {
    getRandomAnswers();
    pauseTrack();
  };

  const getTracks = async () => {
    const {
      data: { items: playLists }
    } = await http.get(userPlayLists);

    const playListsTracksResponse = await Promise.all(
      playLists.map(async playList => http.get(tracksFromPlayList(playList.id)))
    );

    const _tracks = playListsTracksResponse.reduce(
      (totalTracks, trackResponse) => {
        const playListTrackList = trackResponse.data.items
          .map(({ track }) => track)
          .filter(track => track.preview_url);
        totalTracks = [...totalTracks, ...playListTrackList];
        return totalTracks;
      },
      []
    );
    setTracks(_tracks);
  };

  const getRandomAnswers = () => {
    const randomNumbers = getRandomNumbers(numberAnswers, tracks.length);
    const _answers = randomNumbers.map(number => tracks[number]);
    const randomNumber = getRandomNumber(0, 4);
    setRandomTrack(tracks[randomNumbers[randomNumber]]);
    setAnswers(_answers);
  };

  const [isCorrect, setIsCorrect] = useState(isValidated);
  const handleValidate = e => {
    setIsValidated(true);
  };

  const pauseTrack = () => {
    setTimeout(() => {
      playerRef.current.pause();
      history.push('/play');
    }, trackDuration);
  };
  const handleNextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  const resetQuestions = () => {
    setIsValidated(false);
    setIsCorrect(false);
    setRemainingTime(10);
  };

  const handleCorrect = (_isCorrect = false) => {
    handleValidate();
    setIsCorrect(_isCorrect);
  };

  const handlePlaySound = () => {
    if (isValidated) {
      const soundName = isCorrect ? 'correct' : 'wrong';
      const sound = getSound(soundName);
      soundRef.current.src = sound;
      soundRef.current.play();
    }
  };

  useEffect(handlePlaySound, [isValidated]);

  return (
    <QuestionContext.Provider
      value={{
        tracks,
        randomTrack,
        playerRef,
        answers,
        isValidated,
        handleValidate,
        setIsCorrect,
        isCorrect,
        handleNextQuestion,
        getQuestion,
        resetQuestions,
        trackDuration,
        soundRef,
        handleCorrect,
        remainingTime,
        setRemainingTime,
        questionNumber,
        maxQuestions
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
