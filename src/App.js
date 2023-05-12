import "./App.css";
import NavBar from "./components/NavBar";
import Users from "./components/Users";
import React, { useState } from "react";
import Team from "./components/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [data, setData] = useState();
  return (
    <BrowserRouter>
      <Routes>
        {/* <NavBar setData={setData} /> */}
        {/* data={data} */}
        {/* <Users /> */}
        <Route path="/" element={<Users />} />
        {/* <Team /> */}
        <Route path="/Team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
