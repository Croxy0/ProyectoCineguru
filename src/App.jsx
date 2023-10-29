import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import Singup from "./pages/Signup";
export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/login"  element={<Login />}/>
        <Route exact path="/singup" element={<Singup />}/>
      </Routes>
    </BrowserRouter>
  );
}