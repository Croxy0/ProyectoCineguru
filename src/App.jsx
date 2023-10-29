import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Singup from "./pages/Singup";
export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Routes exact path="/login"  element={<Login />}/>
        <Routes exact path="/singup" element={<Singup />}/>
      </Routes>
    </BrowserRouter>
  );
}