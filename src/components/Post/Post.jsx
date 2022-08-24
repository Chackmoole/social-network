import Avatar from "../Avatar/Avatar";
import "./Post.css";

const Post = ({ message, likes, postAvatar }) => {
  return (
    <li>
      <div className="post__wrapper">
        <Avatar postAvatar={postAvatar} />
        <span>{message}</span>
      </div>

      <div className="post__box">
        <img
          className="icon__heart"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vfBCChg2TtEqbNK_5C9x5ve0ZFuyfhs8aexZ4v1feCVvWa1sJZZ49EsbRWX3DWQo3Fo&usqp=CAU"
          alt=""
        />
        <span>{likes}</span> Likes
      </div>
    </li>
  );
};

export default Post;
