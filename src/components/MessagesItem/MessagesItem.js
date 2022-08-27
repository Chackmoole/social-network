import styles from "./MessagesItem.module";

const MessagesItem = ({ message }) => {
  return <li className={styles.messagesItem}>{message}</li>;
};

export default MessagesItem;
