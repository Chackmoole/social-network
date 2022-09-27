const ACTION_TYPE = {
  addProfileMessage: "ADD_PROFILE_MASSAGE",
  updatePropfileMessageText: "UPDATE_PROFILE_MESSAGE_TEXT",
};

const initialState = {
  posts: [
    {
      message: "Сообщение №1",
      likes: 10,
    },
    {
      message: "Сообщение №2",
      likes: 29,
    },
    {
      message: "Сообщение №3",
      likes: 12,
    },
  ],
  newProfileText: "Default text",
};

const propfileReducer = (state = initialState, action) => {
  const addProfileMessage = ({ text }) => {
    const newMessage = {
      message: text,
      likes: 0,
    };

    state.posts.push(newMessage);
  };
  const updateProfileMessageText = ({ text }) => {
    state.newProfileText = text;
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

export const addProfileMessageCreateAction = ({ text }) => ({
  type: ACTION_TYPE.addProfileMessage,
  payload: { text },
});

export const updatePropfileMessagetextCreateAction = ({ text }) => ({
  type: ACTION_TYPE.updatePropfileMessageText,
  payload: { text },
});

export default propfileReducer;
