import { useOutletContext } from "react-router-dom";
import SummaryCard from "../components/SummaryCard";

function Summary() {
  const savedSongs = useOutletContext();
  const uniqueArtists = new Set();
  savedSongs.forEach((song) => {
    uniqueArtists.add(song.artist);
  });

  const genres = savedSongs.map((song) => song.genre);
  console.log(genres);

  return (
    <>
      <main>
        <h1>Your Summary:</h1>
        <SummaryCard values={[...uniqueArtists]} type="Artists" />
        <SummaryCard values={genres} type="Genres" />
      </main>
    </>
  );
}

export default Summary;
