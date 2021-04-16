import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div style={{ maxWidth: "100%", width: "98%" }} className="mx-auto">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
