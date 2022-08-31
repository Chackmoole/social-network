import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";

const NavBar = ({ state }) => {
  return (
    <aside className={styles.asideBox}>
      <nav className={styles.nav}>
        <div>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
          >
            Profiles
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/dialogs"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
          >
            Message
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
          >
            News
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/music"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
          >
            Music
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : `${styles.link}`
            }
          >
            Settings
          </NavLink>
        </div>
      </nav>
      <Friends friends={state.friends} />
    </aside>
  );
};
export default NavBar;
