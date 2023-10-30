import { useState, useEffect } from "react";
import { CLIENT_SECRET, CLIENT_ID } from "../config";
function SpotifyContainer() {
  const [spotifySongs, setSpotifySongs] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    })
      .then((r) => r.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  if (accessToken) {
    fetch(
      "https://api.spotify.com/v1/search?q=misery+business&type=track&limit=6",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((r) => r.json())
      .then((data) => createSongObjects(data.tracks.items));
  }

  function createSongObjects(items) {
    const promises = items.map((song) => {
      const artist = song.artists[0];
      return fetchGenre(artist.href).then((genre) => {
        return {
          title: song.name,
          album: song.album.name,
          artist: artist.name,
          art: song.album.images[0].url,
          genre: genre,
        };
      });
    });
    Promise.all(promises).then((results) => console.log(results));
  }

  function fetchGenre(url) {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((r) => r.json())
      .then((data) => data.genres[0]);
  }

  return <div>Spotify</div>;
}

export default SpotifyContainer;
