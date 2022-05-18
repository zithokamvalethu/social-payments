import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mediapage from "./socialMediaPage";
import Home from "./home";
// import existingProduct from "./components/existingProduct";
import Existingproduct from "./existingProduct";
import "./App.css";
import ProductPage from "./Components/ProductPage";
import ContentGenerate from "./Components/ContentGenerate";
import CreateContent from "./Components/CreateContent";
import AddImage from "./Components/AddImage";
import ScheduleContent from "./Components/ScheduleContent";
import ProductRegisteration from "./Components/ProductRegisteration";
import Dashboard from "./Components/Dashboard";

// import Navbar from "./Components/Navbar";
// import Home from "./Home";
// import Contact from "./Contact";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/content-generate" element={<ContentGenerate />} />
          <Route path="/create-content" element={<CreateContent />} />
          <Route path="/add-image" element={<AddImage />} />
          <Route path="/schedule-content" element={<ScheduleContent />} />
          <Route
            path="/product-registeration"
            element={<ProductRegisteration />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
