import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes path="/" element={<ChatPage />}>
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/" element={<ChatPage />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="*" element={<p>La página no existe</p>} />
        {/* <Navigate to='/' /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
