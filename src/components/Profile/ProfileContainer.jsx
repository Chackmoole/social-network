import React from "react";
import {
  addProfileMessageCreateAction,
  updatePropfileMessagetextCreateAction,
} from "../../redux/profileReducer";
import Profile from "./Profile";

const ProfileContainer = ({ state, avatar, dispatch }) => {
  const addPost = ({ text }) => {
    dispatch(addProfileMessageCreateAction({ text: text }));
    dispatch(updatePropfileMessagetextCreateAction({ text: "" }));
  };

  const onPostChange = ({ text }) => {
    dispatch(
      updatePropfileMessagetextCreateAction({
        text: text,
      })
    );
  };

  return (
    <Profile
      state={state}
      avatar={avatar}
      addPost={addPost}
      onPostChange={onPostChange}
    />
  );
};
export default ProfileContainer;
