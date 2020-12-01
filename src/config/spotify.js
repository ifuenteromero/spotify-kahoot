export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const spotifyLogoUrl =
  'https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg';

const redirectUri = process.env.REACT_APP_REDIRECT_URL;

const clientId = process.env.REACT_APP_CLIENT_ID;

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'playlist-read-private'
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;

const currentUserProfileEndPoint = '/me';
const userPlayLists = '/me/playlists';
// esto seria más configuración que utils
export const tracksFromPlayList = playListId =>
  `/playlists/${playListId}/tracks`;

export default {
  currentUserProfileEndPoint,
  userPlayLists
};
