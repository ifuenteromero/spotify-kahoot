import React, { useEffect } from 'react';
import { http } from '../services/httpService';
import '../stylesheets/player.scss';

const Player = () => {
  useEffect(() => {
    getPlayLists();
  }, []);

  const getPlayLists = async () => {
    const { data: playLists } = await http.get('/me/playlists');
    console.log({ playLists });
  };
  return (
    <>
      <audio controls autoPlay className='player'>
        <source
          src='https://p.scdn.co/mp3-preview/0b642e3e2a6730a717ad2e5ce57e5526b76dc283?cid=8d01b684a5a94ce5bdcadcb5179314e0'
          type='audio/mpeg'
        />
      </audio>
    </>
  );
};

export default Player;
