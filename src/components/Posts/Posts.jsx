import Post from "../Post/Post";

const postsData = [
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

const Posts = () => {
  return (
    <ul>
      <Post
        message={postsData[0].message}
        likes={postsData[0].likes}
        postAvatar={postsData[0].postAvatar}
      />
      <Post
        message={postsData[1].message}
        likes={postsData[1].likes}
        postAvatar={postsData[1].postAvatar}
      />{" "}
      <Post
        message={postsData[2].message}
        likes={postsData[2].likes}
        postAvatar={postsData[2].postAvatar}
      />
    </ul>
  );
};

export default Posts;
