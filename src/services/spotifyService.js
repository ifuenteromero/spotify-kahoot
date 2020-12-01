import { http } from './httpService';
import endPoints, { tracksFromPlayList } from '../config/spotify';

// Separando esto estamos desacoplando lógica que además podemos testear
// independientemente del componente

export const getUser = async () => {
  const { data: user } = await http.get('/me');
  return user;
};

export const getUserPlayLists = async () => {
  const { data: { items } } = await http.get(endPoints.userPlayLists);
  return items;
};

export const getTracksFromPlaylist = async (playListId) => {
  const path = tracksFromPlayList(playListId);
  return http.get(path);
};
