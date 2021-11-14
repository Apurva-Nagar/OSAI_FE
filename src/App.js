import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import CollegeDetails from "./components/CollegeDetails";
import StudentsDetails from "./components/StudentDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/college/:id" element={<CollegeDetails />} />
          <Route path="/student/:id" element={<StudentsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
