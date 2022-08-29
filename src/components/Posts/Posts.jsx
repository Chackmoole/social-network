import Post from "../Post/Post";


const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => {
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
});

const Posts = () => {
  return <ul>{postsElements}</ul>;
};

export default Posts;
