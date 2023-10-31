import { useState } from "react";
import SongForm from "../components/SongForm";
import SpotifyContainer from "../components/SpotifyContainer";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [newSong, setNewSong] = useState({
    title: "",
    album: "",
    artist: "",
    art: "",
    genre: "",
  });

  const { handleAddSong } = useOutletContext();

  function handleUpdateNewSong(event) {
    setNewSong({ ...newSong, [event.target.name]: event.target.value });
  }

  function handleSelectSong(song) {
    setNewSong(song);
  }

  function onAddSong(e) {
    e.preventDefault();
    console.log(newSong);
    const configObj = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    };
    fetch("http://localhost:3000/songs", configObj)
      .then((r) => r.json())
      .then((song) => handleAddSong(song));
  }

  return (
    <div className=" home">
      <div className="container-fluid home1">
        <h1>Save a Song Below:</h1>
        <SongForm
          newSong={newSong}
          onUpdateNewSong={handleUpdateNewSong}
          onAddSong={onAddSong}
        />
      </div>
      <div className="container home2">
        <h1>Or browse Spotify's tracks first</h1>
        <SpotifyContainer handleSelectSong={handleSelectSong} />
      </div>
    </div>
  );
}

export default Home;
