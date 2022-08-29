import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
const posts = [
  {
    message: "Сообщение №1",
    likes: 10,
    postAvatar:
      "https://v-mire-sobak.ru/images/aimages/cvergshnaucer/harakter-cvergshnaucera1.jpg",
  },
  {
    message: "Сообщение №2",
    likes: 29,
    postAvatar:
      "https://pets.mail.ru/pic/pets/2019/07/15/Depositphotos_122763100_s-2019_1_1.jpg",
  },
  {
    message: "Сообщение №3",
    likes: 12,
    postAvatar:
      "https://lapkins.ru/upload/iblock/ba8/ba827c035a3530306f737c3a2e2b4740.jpg",
  },
];

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} users={users} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
