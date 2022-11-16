import { API_KEY } from '@env';

const URL = 'https://ws.audioscrobbler.com/2.0/';

const TOP_ARTISTS_URL = (apiKey = API_KEY) => `${URL}?method=chart.gettopartists&format=json&api_key=${apiKey}`;
const ARTIST_URL = (artistMbid, apiKey = API_KEY) => `${URL}?method=artist.getinfo&mbid=${artistMbid}&format=json&api_key=${apiKey}`;

async function fetchData(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getTopArtists() {
  const data = await fetchData(TOP_ARTISTS_URL());
  const artists = data.artists.artist.map(artist => {
    return {
      id: artist.mbid,
      name: artist.name,
      image: artist.image[0]['#text']
    };
  });

  return artists;
}

export async function getArtistInfo(mbid) {
  const data = await fetchData(ARTIST_URL(mbid));
  const artist = {
    name: data.artist.name,
    mbid: data.artist.mbid,
    image: data.artist.image[0]['#text'],
    bio: data.artist.bio.sumarry
  };

  return artist;
}
