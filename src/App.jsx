// src/App.jsx
import React from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import ScrollToTop from "./components/layout/ScrollToTop";
import Banner from "./components/pages/Banner";
import "./index.css";

function App() {
  return (
    <div>
      <figure className="relative w-full">
        {/* รูปภาพ */}
        <img
          className="fixed inset-0 xl:top-[-300px] top-0 w-full sm:h-auto h-[320px] object-cover -z-10"
          src="/img/ta.jpg"
          alt=""
        />
        {/* Overlay ที่ปรับขนาดตามรูปภาพ */}
        <div className="fixed inset-0 xl:top-[-300px] top-0 w-full h-auto bg-black/70 -z-10"></div>
      </figure>

      <div id="home">
        <Banner />
      </div>

      <Navbar />

      <div id="about">
        <About />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
