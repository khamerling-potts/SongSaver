import { useOutletContext } from "react-router-dom";
import SummaryCard from "../components/SummaryCard";

function Summary() {
  const savedSongs = useOutletContext();
  const uniqueArtists = new Set();
  savedSongs.forEach((song) => {
    uniqueArtists.add(song.artist);
  });

  const countedGenres = {};
  savedSongs.forEach((song) => {
    if (song.genre in countedGenres) {
      ++countedGenres[song.genre];
    } else {
      countedGenres[song.genre] = 1;
    }
  });

  //sorting genres based on # of occurrences, examples in comments
  const rankedGenres = Object.entries(countedGenres) //[ [rock, 1], [indie, 3] ]
    .sort((a, b) => b[1] - a[1]) //[ [indie, 3], [rock, 1] ]
    .map((genre) => genre[0]); //[indie, rock]

  return (
    <>
      <main>
        <h1>Your Summary:</h1>
        <SummaryCard values={[...uniqueArtists]} type="Artists" />
        <SummaryCard values={rankedGenres} type="Genres" />
      </main>
    </>
  );
}

export default Summary;
