import Post from "../Post/Post";

const posts = [
  {
    message: "Сообщение №1",
    likes: 10,
    postAvatar:
      "https://v-mire-sobak.ru/images/aimages/cvergshnaucer/harakter-cvergshnaucera1.jpg",
  },
  {
    message: "Сообщение №2",
    likes: 29,
    postAvatar:
      "https://pets.mail.ru/pic/pets/2019/07/15/Depositphotos_122763100_s-2019_1_1.jpg",
  },
  {
    message: "Сообщение №3",
    likes: 12,
    postAvatar:
      "https://lapkins.ru/upload/iblock/ba8/ba827c035a3530306f737c3a2e2b4740.jpg",
  },
];

const postsElements = posts.map((post) => {
  return (
    <Post
      message={post.message}
      likes={post.likes}
      postAvatar={post.postAvatar}
    />
  );
});

const Posts = () => {
  return <ul>{postsElements}</ul>;
};

export default Posts;
