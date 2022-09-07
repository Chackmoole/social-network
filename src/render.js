import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import {
  addPost,
  addProfileMessage,
  updateProfileMessageText,
} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        updateProfileMessageText={updateProfileMessageText}
        addPost={addPost}
        addProfileMessage={addProfileMessage}
      />
    </React.StrictMode>
  );
};
