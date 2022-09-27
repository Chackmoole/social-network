import React from "react";
import {
  addProfileMessageCreateAction,
  updatePropfileMessagetextCreateAction,
} from "../../redux/profileReducer";
import Profile from "./Profile";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { profilePage: state.profilePage, avatar: state.auth.avatar };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: ({ text }) => {
      dispatch(addProfileMessageCreateAction({ text: text }));
      dispatch(updatePropfileMessagetextCreateAction({ text: "" }));
    },
    onPostChange: ({ text }) => {
      dispatch(
        updatePropfileMessagetextCreateAction({
          text: text,
        })
      );
    },
  };
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
