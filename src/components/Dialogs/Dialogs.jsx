import styles from "./Dialogs.module.css";
import DialogsItem from "../DialogsItem/DialogsItem";
import MessagesItem from "../MessagesItem/MessagesItem";


const Dialogs = ({ messages, users }) => {

  return (
    <section className={styles.dialogs}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.wrapper}>

        <ul className={styles.dialogsList}>
          {users.map((user) => {
            return <DialogsItem dialogItem={user.name} id={user.id} />;
          })}
        </ul>
        <ul className={styles.messagesList}>
          {messages.map((message) => {
            return <MessagesItem message={message.message} />;
          })}
        </ul>

      </div>
    </section>
  );
};

export default Dialogs;
