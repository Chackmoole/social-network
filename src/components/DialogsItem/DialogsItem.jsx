import styles from "./DialogsItem.module.css";

const DialogsItem = ({ dialogItem, isActive }) => {
  const classNameActive = isActive ? styles.dialogsItemActive : "";
  return (
    <li className={`${styles.dialogsItem} ${classNameActive}`}>{dialogItem}</li>
  );
};

export default DialogsItem;
