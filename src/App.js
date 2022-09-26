import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = ({ store }) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <NavBar state={store.getState().sidebar} />
        <div className="app__inner">
          <Routes>
            <Route
              path="/profile"
              element={
                <Profile
                  state={store.getState().profilePage}
                  avatar={store.getState().auth.avatar}
                  newProfileText={store.getState().profilePage.newProfileText}
                  dispatch={store.dispatch.bind(store)}
                />
              }
            />
            <Route
              path="/dialogs"
              element={
                <DialogsContainer
                  state={store.getState().dialogPage}
                  userName={store.getState().auth.userName}
                  dispatch={store.dispatch.bind(store)}
                />
              }
            />
            <Route
              path="/dialogs/:id"
              element={
                <DialogsContainer
                  state={store.getState().dialogPage}
                  userName={store.getState().auth.userName}
                  dispatch={store.dispatch.bind(store)}
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
