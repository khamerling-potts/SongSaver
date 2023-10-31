import { useState, useEffect } from "react";
import { CLIENT_SECRET, CLIENT_ID } from "../config";

function SpotifyContainer() {
  const [spotifySongs, setSpotifySongs] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  //Fetch temporary access token when rendered
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

  //If access token has been set, make initial fetch request for songs
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

  //Function that creates song objects from spotify results (to be rendered as SongCards)
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

  //No working endpoint for track genres, so we have to make a separate fetch request for artist genres
  function fetchGenre(url) {
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.genres[0]) {
          return data.genres[0];
        } else {
          return "No genre specified";
        }
      });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search for songs on Spotify..."
        />
      </form>
    </div>
  );
}

export default SpotifyContainer;
