import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "@/index.css";
import Home from "@/page/Home/Home.js";
import Error from "@/page/Error/Error.js";
import { NavHorizontal, NavVertical } from "@/components/Nav/Nav.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavHorizontal />
      <NavVertical />
      <Routes>
        <Route index path="/" element={<Navigate to="/user/12" />} />
        <Route path="/user/:userId" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
