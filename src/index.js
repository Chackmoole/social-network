import React from "react";
import App from "./App";
import "./index.css";
import state, {
  addPost,
  addProfileMessage,
  subscribe,
  updateDialogMessageText,
  updateProfileMessageText,
} from "./redux/state";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        updateProfileMessageText={updateProfileMessageText}
        addPost={addPost}
        addProfileMessage={addProfileMessage}
        updateDialogMessageText={updateDialogMessageText}
      />
    </React.StrictMode>
  );
};

renderEntireTree(state);

subscribe(renderEntireTree);
