import React from "react";
import styles from "./Profile.module.css";
import Avatar from "../Avatar/Avatar";
import ProfileDescription from "../ProfileDescription/ProfileDescription";
import Posts from "../Posts/Posts";

const Profile = ({ profilePage, avatar, addPost, onPostChange }) => {
  return (
    <div className={styles.profile}>
      <img
        className={styles.profile__header}
        src="https://bingvsdevportalprodgbl.blob.core.windows.net/demo-images/9b3b22ca-d065-40a9-b5d8-2296beb8c717.jpeg"
      />
      <div className={styles.profile__box}>
        <Avatar src={avatar} />
        <ProfileDescription />
      </div>
      <div className={styles.block}>
        <h3>Сообщения:</h3>
        <input
          className={styles.input}
          placeholder="Введите сообщение"
          value={profilePage.newProfileText}
          onChange={(e) => {
            onPostChange({ text: e.target.value });
          }}
        />
        <button
          className={styles.button}
          onClick={() => {
            addPost({ text: profilePage.newProfileText });
          }}
        >
          Отправить
        </button>
        <Posts state={profilePage} src={avatar} />
      </div>
    </div>
  );
};
export default Profile;
