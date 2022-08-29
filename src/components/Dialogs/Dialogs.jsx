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

const messages = [
  { id: 1, message: "Гав" },
  { id: 2, message: "Гав-гав" },
  { id: 3, message: "Р-р-р-р гав" },
];

const usersElements = users.map((user) => {
  return <DialogsItem dialogItem={user.name} id={user.id} />;
});

const dialogsElements = messages.map((message) => {
  //тут как лучше с наименованием быть?
  return <MessagesItem message={message.message} />;
});

const Dialogs = ({}) => {
  return (
    <section className={styles.dialogs}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.wrapper}>
        <ul className={styles.dialogsList}>{usersElements}</ul>
        <ul className={styles.messagesList}>{dialogsElements}</ul>
      </div>
    </section>
  );
};

export default Dialogs;
