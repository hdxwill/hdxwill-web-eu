import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Products from "./pages/Products";
import Technology from "./pages/Technology";
import Contact from "./pages/Contact";
import DummyPage from "./pages/DummyPage";
import TechDetail from "./pages/TechDetail";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/product" element={<Products />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route
            path="/terms-and-conditions"
            element={<DummyPage title="Terms of Service" />}
          />
          <Route
            path="/privacy-policy"
            element={<DummyPage title="Privacy Policy" />}
          />
          <Route path="/faqs" element={<DummyPage title="FAQs" />} />
          <Route path="/:slug" element={<TechDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
