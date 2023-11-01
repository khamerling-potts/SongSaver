import {
  Link,
  Outlet,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import SongCard from "../components/SongCard";
import { useState } from "react";

function SavedSongs() {
  const [summaryOpen, setSummaryOpen] = useState(false);
  const { savedSongs, handleUnsave } = useOutletContext();
  const songList = savedSongs.map((song) => (
    <SongCard
      key={song.id}
      song={song}
      handleUnsave={handleUnsave}
      type="saved"
    />
  ));

  function handleClick() {
    setSummaryOpen((summaryOpen) => !summaryOpen);
  }
  return (
    <>
      <h1>Saved Songs</h1>
      <div className="container savedcontainer mb-5">
        <div className="row">{songList}</div>
      </div>
      <div className="container summarycontainer">
        {summaryOpen ? (
          <Link
            to={"/saved"}
            className="btn w-100 summarybtn btn-outline-light mb-3"
            onClick={handleClick}
          >
            Hide Summary
          </Link>
        ) : (
          <Link
            to={"/saved/summary"}
            className="btn w-100 summarybtn btn-outline-light mb-3"
            onClick={handleClick}
          >
            View Summary
          </Link>
        )}
        <Outlet context={savedSongs} />
      </div>
    </>
  );
}

export default SavedSongs;
