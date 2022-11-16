import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Meta from "./routes//meta/Meta";
import Places from "./routes/Places";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meta" element={<Meta />} />
        <Route path="/meta/place" element={<Places />} />
      </Routes>
    </Router>
  );
}

export default App;
