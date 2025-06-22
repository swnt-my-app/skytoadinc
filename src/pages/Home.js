import React from "react";
import SkyToadServices from "./Services";
import Navbar from "../common/Navbar";
import ImageSlider from "../common/ImageSlider";
import Contact from "./Contact";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <ImageSlider />
      <section className="hero">
        <SkyToadServices/>
      </section>
      <Contact />
    </div>
  );
}

export default Home;