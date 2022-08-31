import Avatar from "../Avatar/Avatar";
import styles from "./Post.module.css";

const Post = ({ message, likes, postAvatar }) => {
  return (
    <li className={styles.post}>
      <div className={styles.post__wrapper}>
        <Avatar postAvatar={postAvatar} />
        <span className={styles.message}>{message}</span>
      </div>

      <div className={styles.post__box}>
        <img
          className={styles.icon__heart}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vfBCChg2TtEqbNK_5C9x5ve0ZFuyfhs8aexZ4v1feCVvWa1sJZZ49EsbRWX3DWQo3Fo&usqp=CAU"
          alt=""
        />
        <span>{likes}</span> Likes
      </div>
    </li>
  );
};

export default Post;
