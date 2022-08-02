import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthService from "./firebase/auth_service";
import Kakao from "./firebase/kakao";
import ImageUploader from "./firebase/img_upload";
import Database from "./firebase/database";

const root = ReactDOM.createRoot(document.getElementById("root"));
const authService = new AuthService();
const kakao = new Kakao();
const imageUploader = new ImageUploader();
const database = new Database();

kakao.login();
root.render(
  <React.StrictMode>
    <App
      authService={authService}
      imageUploader={imageUploader}
      database={database}
    />
  </React.StrictMode>
);
//1
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
