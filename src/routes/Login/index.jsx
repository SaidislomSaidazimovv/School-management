import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../../pages/Login";

function LoginPage() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default LoginPage;
