import React, { useEffect, useRef, useState } from 'react';
import { http } from '../services/httpService';
import '../stylesheets/player.scss';

const Player = () => {
  const playerRef = useRef();
  useEffect(() => {
    getPlayLists();
  }, []);
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    getRandomTrack();
  }, [tracks]);

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getRandomTrack = () => {
    const totalTracks = tracks.length;
    const randomNumber = getRandomArbitrary(0, totalTracks - 1);
    setRandomTrack(tracks[randomNumber]);
    setTimeout(() => {
      playerRef.current.pause();
    }, 5000);
  };
  const [randomTrack, setRandomTrack] = useState({
    id: null,
    preview_url: null
  });
  const getPlayLists = async () => {
    const {
      data: { items: playLists }
    } = await http.get('/me/playlists');
    console.log({ playLists });
    const resultado = await Promise.all(
      playLists.map(async playList =>
        http.get(`/playlists/${playList.id}/tracks`)
      )
    );

    console.log({ resultado });
    let _tracks = [];
    resultado.forEach(
      item =>
        (_tracks = [..._tracks, ...item.data.items.map(({ track }) => track)])
    );
    setTracks(_tracks.filter(track => track.preview_url));
  };
  return (
    <>
      {randomTrack?.preview_url && (
        <audio controls ref={playerRef} className='player'>
          <source src={randomTrack?.preview_url} type='audio/mpeg' />
        </audio>
      )}
    </>
  );
};

export default Player;
