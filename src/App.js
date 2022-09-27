import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import { Provider } from "react-redux";

const App = ({ store }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app__wrapper">
          <Header />
          <NavBar state={store.getState().sidebar} />
          <div className="app__inner">
            <Routes>
              <Route
                path="/profile"
                element={
                  <ProfileContainer
                    state={store.getState().profilePage}
                    avatar={store.getState().auth.avatar}
                    dispatch={store.dispatch.bind(store)}
                  />
                }
              />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/dialogs/:id" element={<DialogsContainer />} />
              <Route path="/music" element={<Music />} />
              <Route path="/news" element={<News />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
