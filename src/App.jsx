import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_menu from "./components/main_menu/main_menu";
import Editor from "./components/editor/editor";
import Share from "./components/share/share";

function App({ authService, kakao }) {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/main"
            element={<Main_menu authService={authService} />}
          />
          <Route path="/editor" element={<Editor />} />
          <Route path="/share" element={<Share kakao={kakao} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
