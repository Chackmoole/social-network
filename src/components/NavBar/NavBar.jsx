import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <a className={styles.link}>Propfiles</a>
      </div>
      <div>
        <a className={styles.link}>Message</a>
      </div>
      <div>
        <a className={styles.link}>News</a>
      </div>
      <div>
        <a className={styles.link}>Music</a>
      </div>
      <div>
        <a className={styles.link}>Settings</a>
      </div>
    </nav>
  );
};
export default NavBar;
