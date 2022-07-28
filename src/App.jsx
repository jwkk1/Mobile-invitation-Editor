import Login from "./components/login/login";
import styles from "./app.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_menu from "./components/main_menu/main_menu";

function App({ authService }) {
  return (
    <div className={styles.main}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route
            path="/main"
            element={<Main_menu authService={authService} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
