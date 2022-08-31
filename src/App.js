import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Setting/Setting";

const App = ({ state }) => {
  // console.log(state);

  return (
    <BrowserRouter>
      <div className="app__wrapper">
        <Header />
        <NavBar />
        <div className="app__inner">
          <Routes>
            <Route
              path="/profile"
              element={<Profile state={state.profilePage} />}
            />
            <Route
              path="/dialogs"
              element={
                <Dialogs state={state.dialogPage} userName={state.userName} />
              }
            />
            <Route
              path="/dialogs/:id"
              element={
                <Dialogs state={state.dialogPage} userName={state.userName} />
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
