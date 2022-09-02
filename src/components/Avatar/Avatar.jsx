import styles from "./Avatar.module.css";

const Avatar = ({
  className,
  src,
  // = "https://v-mire-sobak.ru/images/aimages/cvergshnaucer/harakter-cvergshnaucera1.jpg",
}) => {
  // const src = className ? imgSrc : srcAvatar;

  return <img className={`${styles.avatar} ${className}`} src={src} alt="" />;
};

export default Avatar;
