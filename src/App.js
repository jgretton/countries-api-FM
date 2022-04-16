import React from "react";
import { Home } from "./pages/Home";
import { Country } from "./pages/Country";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App font-Nunito">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/country" element={<Country />}></Route>
      </Routes>
    </div>
  );
}

export default App;
