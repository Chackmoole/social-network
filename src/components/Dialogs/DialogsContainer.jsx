import React from "react";
import Dialogs from "./Dialogs";

import {
  addDialogPostCreateAction,
  updateDialogMessageTextChangeCreateAction,
} from "../../redux/dialogReducer";

const DialogsContainer = ({ state, userName, dispatch }) => {
  const addMessage = ({ text }) => {
    dispatch(
      addDialogPostCreateAction({
        text: text,
        author: userName,
      })
    );
    dispatch(updateDialogMessageTextChangeCreateAction({ text: "" }));
  };

  const onMessageChange = ({ text }) => {
    dispatch(
      updateDialogMessageTextChangeCreateAction({
        text: text,
      })
    );
  };

  return (
    <Dialogs
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      state={state}
      userName={userName}
    />
  );
};

export default DialogsContainer;
