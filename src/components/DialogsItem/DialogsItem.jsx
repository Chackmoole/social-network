import styles from "./DialogsItem.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = ({ dialogItem, isActive, id }) => {
  const classNameActive = isActive ? styles.dialogsItemActive : "";
  let path = `/dialogs/${id}`;
  return (
    <li className={`${styles.dialogsItem} ${classNameActive}`}>
      <NavLink to={path}>{dialogItem}</NavLink>
    </li>
  );
};

export default DialogsItem;
