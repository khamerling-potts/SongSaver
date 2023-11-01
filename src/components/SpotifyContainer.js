import { useState, useEffect } from "react";
import { CLIENT_SECRET, CLIENT_ID } from "../config";
import SongCard from "./SongCard";

function SpotifyContainer({ handleSelectSong }) {
  const [spotifySongs, setSpotifySongs] = useState([]);
  //const [accessToken, setAccessToken] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  //Fetch temporary access token when rendered
  function handleSearch(e) {
    e.preventDefault();
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    })
      .then((r) => r.json())
      .then((data) => fetchSongs(data.access_token));
  }

  //Fetch songs after submitting search and getting access token
  function fetchSongs(accessToken) {
    fetch(
      `https://api.spotify.com/v1/search?q=${searchTerm.replace(
        " ",
        "+"
      )}&type=track&limit=8`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    )
      .then((r) => r.json())
      .then((data) => createSongObjects(data.tracks.items, accessToken));
  }

  //Function that creates song objects from spotify results (to be rendered as SongCards)
  function createSongObjects(items, accessToken) {
    const promises = items.map((song) => {
      const artist = song.artists[0];
      return fetchGenre(artist.href, accessToken).then((genre) => {
        return {
          title: song.name,
          album: song.album.name,
          artist: artist.name,
          art: song.album.images[0].url,
          genre: genre,
        };
      });
    });
    Promise.all(promises).then((results) => setSpotifySongs(results));
  }

  //No working endpoint for track genres, so we have to make a separate fetch request for artist genres
  function fetchGenre(url, accessToken) {
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

  const spotifyList = spotifySongs.map((song) => (
    <SongCard
      key={crypto.randomUUID()}
      song={song}
      onSelectSong={handleSelectSong}
      type="spotify"
    />
  ));

  return (
    <div className="spotifycontent">
      <form onSubmit={handleSearch} className="mb-3">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            name="search"
            placeholder="Search for songs on Spotify..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "90%" }}
          />
          <button type="submit">Search Song</button>
        </div>
      </form>
      <div className="row g-4 spotifyrow">{spotifyList}</div>
    </div>
  );
}

export default SpotifyContainer;
