import React from "react";
import { Routes, Route } from "react-router-dom";
import SignUp from "../components/SignUp";
import Hero from "../sections/Hero";
import SignIn from "../components/SignIn";
import { getContextData } from "../context/AuthContexProvider";
import { Navigate } from "react-router-dom";

const Router = () => {
  const { user } = getContextData();

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/signin"
          element={user ? <Navigate to="/" /> : <SignIn />}
        />
      </Routes>
    </>
  );
};

export default Router;
