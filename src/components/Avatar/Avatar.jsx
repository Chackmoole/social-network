import "./Avatar.css";

const Avatar = ({
  srcAvatar = "https://v-mire-sobak.ru/images/aimages/cvergshnaucer/harakter-cvergshnaucera1.jpg",
}) => {
  return <img className="avatar" src={srcAvatar} alt="" />;
};

export default Avatar;
