import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contributors } from "./Pages";
import { Navbar } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
