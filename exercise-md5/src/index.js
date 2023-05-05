import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Form from "./components/Ss5_ApiClient/manageBook/form/form";
import ManageBook from "./components/Ss5_ApiClient/manageBook/manageBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path="/add-book" element={<Form />} />
        <Route path="/edit-book/:id" element={<Form />} />
        <Route index element={<ManageBook />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
