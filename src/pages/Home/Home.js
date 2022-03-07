import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HeroSection from "../../Components/HeroSection";
import './Home.css'

export default function Home() { 

  return (
  <section>
  <HeroSection />
  {/* <AboutUs />
  <Projects />
  <Gallery /> */}
  </section>
  );
}
