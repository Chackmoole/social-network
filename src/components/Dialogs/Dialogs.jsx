import styles from "./Dialogs.module.css";
import DialogsItem from "../DialogsItem/DialogsItem";
import MessagesItem from "../MessagesItem/MessagesItem";

const dialogsItemData = [
  { id: 1, dialogItem: "Муся" },
  { id: 2, dialogItem: "Барбос" },
  { id: 3, dialogItem: "Арчик" },
  { id: 4, dialogItem: "Марго" },
  { id: 5, dialogItem: "Дуся" },
  { id: 6, dialogItem: "Маркиза" },
  { id: 7, dialogItem: "Барон" },
  { id: 8, dialogItem: "Дик" },
];

const messagesItemData = [
  { id: 1, messagesItem: "Гав" },
  { id: 2, messagesItem: "Гав-гав" },
  { id: 3, messagesItem: "Р-р-р-р гав" },
];

const Dialogs = ({}) => {
  return (
    <section className={styles.dialogs}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.wrapper}>
        <ul className={styles.dialogsList}>
          <DialogsItem
            dialogItem={dialogsItemData[0].dialogItem}
            id={dialogsItemData[0].id}
          />
          <DialogsItem
            dialogItem={dialogsItemData[1].dialogItem}
            id={dialogsItemData[1].id}
          />
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
