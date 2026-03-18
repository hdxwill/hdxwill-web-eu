import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DummyPage from "./pages/DummyPage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<DummyPage title="Company" />} />
          <Route path="/product" element={<DummyPage title="Products" />} />
          <Route
            path="/technology"
            element={<DummyPage title="Technology" />}
          />
          <Route
            path="/contact-us"
            element={<DummyPage title="Contact Us" />}
          />
          <Route
            path="/terms-and-conditions"
            element={<DummyPage title="Terms of Service" />}
          />
          <Route
            path="/privacy-policy"
            element={<DummyPage title="Privacy Policy" />}
          />
          <Route path="/faqs" element={<DummyPage title="FAQs" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
