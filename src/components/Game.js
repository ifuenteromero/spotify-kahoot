import React, { useEffect, useState } from 'react';
import { http } from '../services/httpService';
import Header from './Header';
import Player from './Player';

const Game = () => {
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const { data: _user } = await http.get('/me');
    setUser(_user);
    console.log({ _user });
    const response = await http.get('/me/playlists');
    console.log({ response });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Header user={user} />
      <Player />
    </>
  );
};

export default Game;
