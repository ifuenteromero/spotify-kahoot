const currentUserProfileEndPoint = '/me';
const userPlayLists = '/me/playlists';
// esto seria más configuración que utils
export const tracksFromPlayList = playListId =>
  `/playlists/${playListId}/tracks`;

export default {
  currentUserProfileEndPoint,
  userPlayLists
};
