import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/saved" className="nav-link">
        Saved Songs
      </NavLink>
    </nav>
  );
}

export default NavBar;
