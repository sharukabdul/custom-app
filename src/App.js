import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Chats from "./components/Chats";
import Home from "./components/Home";
import Login from "./components/Login";
import MyAds from "./components/MyAds";
import Profile from "./components/Profile";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/myads" element={<MyAds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
