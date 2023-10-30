import { useState } from "react";
import SongForm from "../components/SongForm";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [newSong, setNewSong] = useState({
    title: "",
    album: "",
    artist: "",
    art: "",
  });

  const { handleAddSong } = useOutletContext();

  function handleUpdateNewSong(event) {
    setNewSong({ ...newSong, [event.target.name]: event.target.value });
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
    <main>
      <SongForm
        newSong={newSong}
        onUpdateNewSong={handleUpdateNewSong}
        onAddSong={onAddSong}
      />
    </main>
  );
}

export default Home;
