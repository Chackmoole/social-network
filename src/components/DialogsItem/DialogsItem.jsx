import styles from "./DialogsItem.module.css";

const DialogsItem = ({ dialogItem }) => {
  return <li className={styles.dialogsItem}>{dialogItem}</li>;
};

export default DialogsItem;
