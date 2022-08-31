import Post from "../Post/Post";
import styles from "./Posts.module.css";

const Posts = ({ state }) => {
  return (
    <ul className={styles.posts}>
      {state.posts.map((post) => {
        return (
          <Post
            message={post.message}
            likes={post.likes}
            postAvatar={post.postAvatar}
          />
        );
      })}
    </ul>
  );
};

export default Posts;
