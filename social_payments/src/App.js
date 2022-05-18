import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mediapage from "./components/socialMediaPage";
import Home from "./components/home";
// import existingProduct from "./components/existingProduct";
import Existingproduct from "./components/existingProduct";
import "./App.css";

// import Navbar from "./Components/Navbar";
// import Home from "./Home";
// import Contact from "./Contact";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Mediapage />} />
          <Route path="/dropdown" element={<Existingproduct />} />
          {/* <Route path="/media" element={<Existingproduct />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
