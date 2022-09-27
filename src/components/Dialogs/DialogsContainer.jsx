import Dialogs from "./Dialogs";

import {
  addDialogPostCreateAction,
  updateDialogMessageTextChangeCreateAction,
} from "../../redux/dialogReducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { userName: state.userName, dialogPage: state.dialogPage };
};

const mapDispatchToProps = (dispatch, userName) => {
  return {
    addMessage: ({ text }) => {
      dispatch(
        addDialogPostCreateAction({
          text: text,
          author: userName,
        })
      );
      dispatch(updateDialogMessageTextChangeCreateAction({ text: "" }));
    },
    onMessageChange: ({ text }) => {
      dispatch(
        updateDialogMessageTextChangeCreateAction({
          text: text,
        })
      );
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
