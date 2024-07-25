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
import Polygons from "./components/Polygons";
import Carousel from "./components/testimonials/Carousel";
import Tender from "./components/Tender";
import BoardOfDirectors from "./components/BoardOfDirectors";
import LandAcquisition from "./components/LandAcquisition";
import Careers from "./components/Careers";
import News from "./components/News";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Complaint />} />
          <Route path="/tender" element={<Tender />} />
          <Route path="/board-of-directors" element={<BoardOfDirectors/>} />
          <Route path="/land-acquisition" element={<LandAcquisition/>} />
          <Route path='/careers' element={<Careers/>} />
          <Route path="/news" element={<News />} />
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
      <Polygons />
      <AboutRail />
      <OurMission />
      <FeaturedSection />
      <OurProjects />
      <Carousel/>
    </>
  );
}

export default App;
