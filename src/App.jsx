// src/App.jsx
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// Global Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages & Sections
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

// HomePage Composition

import HeroSection from "./components/HeroSection";
import About from "./components/About";
import OrganicFoodSection from "./components/OrganicFoodSection";
import OrganicDistributorSlide from "./components/OrganicDistributorSlide";
import HealthyLivingSlide from "./components/HealthyLivingSlide";
import ExploreProjectsSlider from "./components/ExploreProjectsSlider";
import AgricaSection from "./components/AgricaSection";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

import ContactSection from "./components/ContactSection";

const HomePage = () => (
  <>
    <HeroSection />
    <About />
    <OrganicFoodSection />
    <OrganicDistributorSlide />
    <HealthyLivingSlide />
    <ExploreProjectsSlider />
    <AgricaSection />
    <ContactSection />
  </>
);

const App = () => (
  <CartProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
         <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <Footer />
    </Router>
  </CartProvider>
);

export default App;
