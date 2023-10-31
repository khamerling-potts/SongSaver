import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm  fixed-top">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">SongSaver</span>
        <div className="navbar-nav">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/saved" className="nav-link">
            Saved Songs
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
