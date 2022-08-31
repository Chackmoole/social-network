import styles from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const DialogsItem = ({ dialogItem, isActive, id, avatar }) => {
  const classNameActive = isActive ? styles.dialogsItemActive : "";
  let path = `/dialogs/${id}`;
  return (
    <li className={`${styles.dialogsItem} ${classNameActive}`}>
      <NavLink to={path} className={styles.dialogLink}>
        <Avatar srcAvatar={avatar} />
        {dialogItem}
      </NavLink>
    </li>
  );
};

export default DialogsItem;
