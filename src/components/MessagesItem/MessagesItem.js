import styles from "./MessagesItem.module.css";

const MessagesItem = ({ message, author, userName }) => {
  let isUserMessage = author === userName;
  const classNameAuthorMessage = isUserMessage ? styles.MessagesItemUser : "";
  const postAuthor = isUserMessage ? "Вы:" : `${author}:`;

  return (
    <li className={`${styles.messagesItem} ${classNameAuthorMessage}`}>
      {postAuthor}
      <div>{message}</div>
    </li>
  );
};

export default MessagesItem;
