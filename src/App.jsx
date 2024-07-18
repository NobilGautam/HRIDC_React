import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Complaint from "./Complaint";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutRail from "./components/AboutRail";
import OurMission from "./components/OurMission";
import FeaturedSection from "./components/FeaturedSection";
import OurProjects from "./components/OurProjects";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Complaint />} />
        </Routes>
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <AboutRail />
      <OurMission />
      <FeaturedSection />
      <OurProjects />
    </>
  );
}

export default App;
