import Friend from "../Friend/Friend";
import styles from "./Friends.module.css";

const Friends = ({ friends }) => {
  return (
    <div className={styles.friendsList}>
      {friends.map((friend) => {
        return <Friend name={friend.name} src={friend.avatar} />;
      })}
    </div>
  );
};

export default Friends;
