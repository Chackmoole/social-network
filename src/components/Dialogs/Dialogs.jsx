import styles from "./Dialogs.module.css";
import DialogsItem from "../DialogsItem/DialogsItem";

const Dialogs = ({}) => {
  return (
    <section className={styles.dialogs}>
      <h2 className={styles.title}>Dialogs</h2>
      <div className={styles.wrapper}>
        <ul className={styles.dialogsList}>
          <DialogsItem dialogItem="Муся" />
          <DialogsItem dialogItem="Барбос" />
          <DialogsItem dialogItem="Арчик" isActive={true} />
          <DialogsItem dialogItem="Марго" />
          <DialogsItem dialogItem="Дуся" />
          <DialogsItem dialogItem="Маркиза" />
          <DialogsItem dialogItem="Барон" />
          <DialogsItem dialogItem="Дик" />
        </ul>
        <ul className={styles.messagesList}>
          <li className={styles.messagesItem}>Гав</li>
          <li className={styles.messagesItem}>Гав-гав</li>
          <li className={styles.messagesItem}>Р-р-р-р гав</li>
        </ul>
      </div>
    </section>
  );
};

export default Dialogs;
