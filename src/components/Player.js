import React, { useEffect, useRef, useState } from 'react';
import { http } from '../services/httpService';
import '../stylesheets/player.scss';
import { getRandomNumber } from '../utils/useFulFunctions';
import endPoints, { tracksFromPlayList } from '../utils/spotifyUrls';

const Player = () => {
  const playerRef = useRef();
  const { userPlayLists } = endPoints;
  useEffect(() => {
    getPlayLists();
  }, []);

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getRandomTrack();
  }, [tracks]);

  const pauseTrack = () => {
    const trackDuration = 5000;
    setTimeout(() => {
      playerRef.current.pause();
    }, trackDuration);
  };

  const getRandomTrack = () => {
    const totalTracks = tracks.length;
    const randomNumber = getRandomNumber(0, totalTracks - 1);
    setRandomTrack(tracks[randomNumber]);
    pauseTrack();
  };

  const [randomTrack, setRandomTrack] = useState({
    id: null,
    preview_url: null
  });

  const getPlayLists = async () => {
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
