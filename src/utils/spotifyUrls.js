const currentUserProfileEndPoint = '/me';
const userPlayLists = '/me/playlists';
export const tracksFromPlayList = playListId =>
  `/playlists/${playListId}/tracks`;

export default {
  currentUserProfileEndPoint,
  userPlayLists
};
