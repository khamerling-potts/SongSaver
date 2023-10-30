import { Link, Outlet, useOutletContext } from "react-router-dom";

function SavedSongs() {
  const { savedSongs } = useOutletContext();
  return (
    <>
      <main>
        <h1>This is my saved component!</h1>
        <Link to={"/saved/summary"}>View Summary</Link>
        <Outlet context={savedSongs} />
      </main>
    </>
  );
}

export default SavedSongs;
