import React from "react";

import ReactDOM from "react-dom/client";
import "@/index.css";

import reportWebVitals from "./reportWebVitals";
import Home from "@/page/Home.js";
import { BrowserRouter, Route, Routes, Navigate  } from "react-router-dom";
import Error from "@/page/Error/Error.js";




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Navigate to="/user/12" />} />
       <Route path="/user/:userId" element={< Home/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
