import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Details } from "./components/details";
import { Homepage } from "./Homepage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Homepage />} path="/" />
      <Route element={<Details />} path="/details" />
    </Routes>
  );
};

export default App;
