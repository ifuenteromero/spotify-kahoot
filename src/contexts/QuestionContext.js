import React, { useState, createContext, useEffect } from 'react';
import { http } from '../services/httpService';
import endPoints, { tracksFromPlayList } from '../utils/spotifyUrls';

export const QuestionContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProviderQuestion = ({ children }) => {
  const { userPlayLists } = endPoints;
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    getTracks();
  }, []);

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
  const [tracks, setTracks] = useState([]);

  return (
    <QuestionContext.Provider value={{ tracks }}>
      {children}
    </QuestionContext.Provider>
  );
};
