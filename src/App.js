import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Setting/Setting";

const App = ({
  state,
  updateProfileMessageText,
  addPost,
  addProfileMessage,
  updateDialogMessageText,
}) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <NavBar state={state.sidebar} />
        <div className="app__inner">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  state={state.profilePage}
                  avatar={state.auth.avatar}
                  newProfileText={state.profilePage.newProfileText}
                  updateProfileMessageText={updateProfileMessageText}
                  addProfileMessage={addProfileMessage}
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  state={state.dialogPage}
                  userName={state.auth.userName}
                  addPost={addPost}
                  updateDialogMessageText={updateDialogMessageText}
                />
              }
            />
            <Route
              path="/dialogs/:id"
              element={
                <Dialogs
                  state={state.dialogPage}
                  userName={state.auth.userName}
                />
              }
            />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
