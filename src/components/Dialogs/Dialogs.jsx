import styles from "./Dialogs.module.css";
import DialogsItem from "../DialogsItem/DialogsItem";
import MessagesItem from "../MessagesItem/MessagesItem";

const Dialogs = ({ state, userName }) => {
  return (
    <section className={styles.dialogs}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.wrapper}>
        <ul className={styles.dialogsList}>
          {state.users.map((user) => {
            return (
              <DialogsItem
                dialogItem={user.name}
                id={user.id}
                avatar={user.avatar}
              />
            );
          })}
        </ul>
        <ul className={styles.messagesList}>
          {state.messages.map((message) => {
            return (
              <MessagesItem
                message={message.message}
                author={message.author}
                userName={userName}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Dialogs;
