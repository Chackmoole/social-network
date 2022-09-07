import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

export let renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App state={state} />
    </React.StrictMode>
  );
};
