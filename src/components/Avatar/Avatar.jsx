import "./Avatar.css";

const Avatar = ({
  postAvatar = "https://v-mire-sobak.ru/images/aimages/cvergshnaucer/harakter-cvergshnaucera1.jpg",
}) => {
  console.log(postAvatar);
  return <img className="avatar" src={postAvatar} alt="" />;
};

export default Avatar;
