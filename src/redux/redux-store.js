import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import authReducer from "./authReducer";
import sidebarReducer from "./sidebarReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  auth: authReducer,
  dialogPage: dialogReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;
