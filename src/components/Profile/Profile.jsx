import styles from "./Profile.module.css";
import Avatar from "../Avatar/Avatar";
import PropfileDescription from "../PropfileDescription/PropfileDescription";
import Posts from "../Posts/Posts";

const Profile = ({ state }) => {
  return (
    <div className={styles.profile}>
      <img
        className={styles.profile__header}
        src="https://bingvsdevportalprodgbl.blob.core.windows.net/demo-images/9b3b22ca-d065-40a9-b5d8-2296beb8c717.jpeg"
      />
      <div className={styles.profile__box}>
        <Avatar />
        <PropfileDescription />
      </div>
      <h3>Сообщения:</h3>
      <input placeholder="Введите сообщение" />
      <button>Отправить</button>
      <Posts state={state} />
    </div>
  );
};
export default Profile;
