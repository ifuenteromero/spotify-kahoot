export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const spotifyLogoUrl =
  'https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg';

const redirectUri = 'http://localhost:3000/';

const clientId = process.env.REACT_APP_CLIENT_ID;

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state'
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      var parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};
