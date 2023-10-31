import { Link, Outlet, useOutletContext } from "react-router-dom";
import SongCard from "../components/SongCard";

function SavedSongs() {
  const { savedSongs, handleUnsave } = useOutletContext();
  const songList = savedSongs.map((song) => (
    <SongCard key={song.id} song={song} handleUnsave={handleUnsave} />
  ));
  return (
    <>
      <div className="container-fluid">
        <h1>This is my saved component!</h1>
        <div className="row">{songList}</div>
        <Link to={"/saved/summary"}>View Summary</Link>
        <Outlet context={savedSongs} />
      </div>
    </>
  );
}

export default SavedSongs;
