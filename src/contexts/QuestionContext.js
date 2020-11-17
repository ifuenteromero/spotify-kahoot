import React, { useState, createContext, useEffect, useRef } from 'react';
import { http } from '../services/httpService';
import endPoints, { tracksFromPlayList } from '../utils/spotifyUrls';
import { getRandomNumber, getRandomNumbers } from '../utils/useFulFunctions';

export const QuestionContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProviderQuestion = ({ children }) => {
  const { userPlayLists } = endPoints;
  const playerRef = useRef();
  const numberAnswers = 4;
  const [tracks, setTracks] = useState([]);
  const [answers, setAnswers] = useState([]);

  const [randomTrack, setRandomTrack] = useState({
    id: null,
    preview_url: null
  });

  useEffect(() => {
    getTracks();
  }, []);

  useEffect(() => {
    getRandomAnswers();
    pauseTrack();
  }, [tracks]);

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

  const pauseTrack = () => {
    const trackDuration = 5000;
    setTimeout(() => {
      playerRef.current.pause();
    }, trackDuration);
  };

  return (
    <QuestionContext.Provider value={{ tracks, randomTrack, playerRef }}>
      {children}
    </QuestionContext.Provider>
  );
};
