import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApiProvider } from "./context/ApiContext.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FavoritesPage } from "./pages/FavoritesPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </ApiProvider>
  </React.StrictMode>
);
