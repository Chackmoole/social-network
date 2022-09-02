import styles from "../Friend/Friend.module.css";
import Avatar from "../Avatar/Avatar";

const Friend = ({ name, src }) => {
  return (
    <div className={styles.friendItem}>
      <Avatar className={styles.friendAvatar} src={src} />
      {name}
    </div>
  );
};
export default Friend;
