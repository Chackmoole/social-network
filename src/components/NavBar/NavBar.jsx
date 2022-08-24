import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a className={styles.link} href="/profile">
          Profiles
        </a>
      </div>
      <div>
        <a className={styles.link} href="/dialogs">
          Message
        </a>
      </div>
      <div>
        <a className={styles.link} href="/news">
          News
        </a>
      </div>
      <div>
        <a className={styles.link} href="/music">
          Music
        </a>
      </div>
      <div>
        <a className={styles.link} href="/settings">
          Settings
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
