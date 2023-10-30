import { useState } from "react";
import SongForm from "../components/SongForm";

function Home() {
  const [newSong, setNewSong] = useState({
    title: "",
    album: "",
    artist: "",
    art: "",
  });
  function handleUpdateNewSong(event) {
    setNewSong({ ...newSong, [event.target.name]: event.target.value });
  }
  return (
    <main>
      <SongForm newSong={newSong} onUpdateNewSong={handleUpdateNewSong} />
    </main>
  );
}

export default Home;
