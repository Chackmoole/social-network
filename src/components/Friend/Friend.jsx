import styles from "../Friend/Friend.module.css";
import Avatar from "../Avatar/Avatar";

const Friend = ({ name, imgSrc }) => {
  return (
    <div className={styles.friendItem}>
      <Avatar className={styles.friendAvatar} imgSrc={imgSrc} />
      {name}
    </div>
  );
};
export default Friend;
