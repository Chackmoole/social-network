import styles from "./Dialogs.module.css";
import DialogsItem from "../DialogsItem/DialogsItem";
import MessagesItem from "../MessagesItem/MessagesItem";

const Dialogs = ({}) => {
  return (
    <section className={styles.dialogs}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.wrapper}>
        <ul className={styles.dialogsList}>
          <DialogsItem dialogItem="Муся" id="1" />
          <DialogsItem dialogItem="Барбос" id="2" />
          <DialogsItem dialogItem="Арчик" id="3" isActive={true} />
          <DialogsItem dialogItem="Марго" id="4" />
          <DialogsItem dialogItem="Дуся" id="5" />
          <DialogsItem dialogItem="Маркиза" id="6" />
          <DialogsItem dialogItem="Барон" id="7" />
          <DialogsItem dialogItem="Дик" id="8" />
        </ul>
        <ul className={styles.messagesList}>
          <MessagesItem message="Гав" />
          <MessagesItem message="Гав-гав" />
          <MessagesItem message="Р-р-р-р гав" />
        </ul>
      </div>
    </section>
  );
};

export default Dialogs;
