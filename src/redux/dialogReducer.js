const ACTION_TYPE = {
  addDialogPost: "ADD_DIALOG_MESSAGE",
  updateDialogMessageText: "UPDATE_DIALOG_MESSAGE_TEXT",
};

const dialogReducer = (state, action, userName) => {
  const addDialogPost = (postMessage) => {
    const newPost = {
      id: state.messages.length + 1,
      message: postMessage,
      author: userName,
    };

    state.messages.push(newPost);
  };
  const updateDialogMessageText = (dialogMessageText) => {
    state.newDialogText = dialogMessageText;
  };

  switch (action.type) {
    case ACTION_TYPE.addDialogPost:
      addDialogPost(action.payload);
      return state;
    case ACTION_TYPE.updateDialogMessageText:
      updateDialogMessageText(action.payload);
      return state;
    default:
      return state;
  }
};

export const addDialogPostCreateAction = (text) => ({
  type: ACTION_TYPE.addDialogPost,
  payload: text,
});

export const updateDialogMessageTextChangeCreateAction = (text) => ({
  type: ACTION_TYPE.updateDialogMessageText,
  payload: text,
});

export default dialogReducer;
