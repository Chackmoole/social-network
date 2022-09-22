const ACTION_TYPE = {
  addProfileMessage: "ADD_PROFILE_MASSAGE",
  updatePropfileMessageText: "UPDATE_PROFILE_MESSAGE_TEXT",
};

const propfileReducer = (state, action) => {
  const addProfileMessage = (profileMessage) => {
    const newMessage = {
      message: profileMessage,
      likes: 0,
    };

    state.posts.push(newMessage);
  };
  const updateProfileMessageText = (profileMessageText) => {
    state.newProfileText = profileMessageText;
  };

  switch (action.type) {
    case ACTION_TYPE.addProfileMessage:
      addProfileMessage(action.payload);
      return state;
    case ACTION_TYPE.updatePropfileMessageText:
      updateProfileMessageText(action.payload);
      return state;
    default:
      return state;
  }
};

export const addProfileMessageCreateAction = (text) => ({
  type: ACTION_TYPE.addProfileMessage,
  payload: text,
});

export const updatePropfileMessagetextCreateAction = (text) => ({
  type: ACTION_TYPE.updatePropfileMessageText,
  payload: text,
});

export default propfileReducer;
