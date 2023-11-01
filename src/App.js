import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function App() {
  const [savedSongs, setSavedSongs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((r) => r.json())
      .then((data) => setSavedSongs(data));
  }, []);

  function handleAddSong(song) {
    setSavedSongs([...savedSongs, song]);
    navigate("/saved");
  }
  function handleUnsave(songToDelete) {
    const updatedSongs = savedSongs.filter(
      (song) => song.id !== songToDelete.id
    );
    setSavedSongs(updatedSongs);
  }
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main className="content">
        <Outlet context={{ savedSongs, handleAddSong, handleUnsave }} />
      </main>
    </div>
  );
}

export default App;
