import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import CollegeDetails from "./components/CollegeDetails";
import StudentsDetails from "./components/StudentDetails";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
