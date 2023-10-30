import { Link, Outlet } from "react-router-dom";

function SavedSongs() {
  return (
    <>
      <main>
        <h1>This is my saved component!</h1>
        <Link to={"/saved/summary"}>View Summary</Link>
        <Outlet />
      </main>
    </>
  );
}

export default SavedSongs;
