import React from "react";
import SkyToadServices from "./Services";
import Navbar from "../common/Navbar";
import ImageSlider from "../common/ImageSlider";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <ImageSlider />
      <section className="hero">
        <SkyToadServices/>
      </section>
    </div>
  );
}

export default Home;