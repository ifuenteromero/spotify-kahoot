import React, { useEffect } from 'react';
import { http } from '../services/httpService';

const Game = () => {
  const getUser = async () => {
    const { data } = await http.get('/me');
    console.log({ data });
    const response = await http.get('/me/playlists');
    console.log({ response });
  };
  useEffect(() => {
    getUser();
  }, []);
  return <div>Game</div>;
};

export default Game;
