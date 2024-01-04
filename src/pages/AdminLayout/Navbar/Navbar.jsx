import { useContext } from "react";
import supabase from "../../../config/supabase";
import classes from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

function Navbar() {

  const navigate = useNavigate();
  const { setIsUserLoggedIn } = useContext(AuthContext)

  
  async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (!error)
    {
      navigate("/");
      setIsUserLoggedIn(false)
    } 
      

  }

  const getProperNavLinkStyleClass = ({ isActive }) =>
    isActive ? `${classes.link} ${classes["link-active"]}` : `${classes.link}`;

  return (
    <div className={classes.navbar}>
        <ul className={classes.menu}>
          <li>
            <NavLink to="/" className={classes.link}>
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink to="cars" className={getProperNavLinkStyleClass}>
              Cars
            </NavLink>
          </li>
          <li>
            <NavLink to="reservations" className={getProperNavLinkStyleClass}>
              Rezerwacje
            </NavLink>
          </li>
          <li>
            <NavLink to="messages" className={getProperNavLinkStyleClass}>
              Messages
            </NavLink>
          </li>
          <li>
            <button className={`${classes.link} ${classes["link-logout"]}`} onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>

    </div>
  );
}

export default Navbar;
