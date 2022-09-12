import React from "react";
import App from "./App";
import "./index.css";
import store from "./redux/state";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  );
};

renderEntireTree(store.state);

store.subscribe(renderEntireTree);
