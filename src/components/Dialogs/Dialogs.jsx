import styles from "./Dialogs.module.css";
import DialogsItem from "../DialogsItem/DialogsItem";
import MessagesItem from "../MessagesItem/MessagesItem";

const users = [
  { id: 1, name: "Муся" },
  { id: 2, name: "Барбос" },
  { id: 3, name: "Арчик" },
  { id: 4, name: "Марго" },
  { id: 5, name: "Дуся" },
  { id: 6, name: "Маркиза" },
  { id: 7, name: "Барон" },
  { id: 8, name: "Дик" },
];

const messagesItemData = [
  { id: 1, messages: "Гав" },
  { id: 2, messages: "Гав-гав" },
  { id: 3, messages: "Р-р-р-р гав" },
];

const Dialogs = ({}) => {
  return (
    <section className={styles.dialogs}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.wrapper}>
        <ul className={styles.dialogsList}>
          <DialogsItem dialogItem={users[0].name} id={users[0].id} />
          <DialogsItem dialogItem={users[1].name} id={users[1].id} />
        </ul>
        <ul className={styles.messagesList}>
          <MessagesItem message={messagesItemData[0].messagesItem} />
          <MessagesItem message={messagesItemData[1].messagesItem} />
          <MessagesItem message={messagesItemData[2].messagesItem} />
        </ul>
      </div>
    </section>
  );
};

export default Dialogs;
