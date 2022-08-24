import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <NavLink className={styles.link} to="/profile">
          Profiles
        </NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to="/dialogs">
          Message
        </NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to="/news">
          News
        </NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to="/music">
          Music
        </NavLink>
      </div>
      <div>
        <NavLink className={styles.link} to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
