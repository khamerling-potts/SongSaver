import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/savedsongs">Saved Songs</NavLink>
      <NavLink to="/summary">Summary</NavLink>
    </div>
  );
}

export default NavBar;
