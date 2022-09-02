import styles from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const DialogsItem = ({ dialogItem, isActive, id, src }) => {
  const classNameActive = isActive ? styles.dialogsItemActive : "";
  let path = `/dialogs/${id}`;
  return (
    <li className={`${styles.dialogsItem} ${classNameActive}`}>
      <NavLink to={path} className={styles.dialogLink}>
        <Avatar src={src} />
        {dialogItem}
      </NavLink>
    </li>
  );
};

export default DialogsItem;
