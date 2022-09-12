import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Setting/Setting";

const App = ({ store }) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <NavBar state={store.state.sidebar} />
        <div className="app__inner">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  state={store.state.profilePage}
                  avatar={store.state.auth.avatar}
                  newProfileText={store.state.profilePage.newProfileText}
                  updateProfileMessageText={store.updateProfileMessageText}
                  addProfileMessage={store.addProfileMessage}
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs
                  state={store.state.dialogPage}
                  userName={store.state.auth.userName}
                  addPost={store.addPost}
                  updateDialogMessageText={store.updateDialogMessageText}
                />
              }
            />
            <Route
              path="/dialogs/:id"
              element={
                <Dialogs
                  state={store.state.dialogPage}
                  userName={store.state.auth.userName}
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
