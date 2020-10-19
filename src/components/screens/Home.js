import React from "react";
import Footer from "../parts/Footer";
import Navbar from "../parts/Navbar";
import About from "../parts/About";
import WhatWedo from "../parts/WhatWeDo";
import JoinSociety from "../parts/JoinSociety";
import HomeHead from "../parts/HomeHead";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeHead />
      <About />
      <WhatWedo />
      <JoinSociety />
      <Footer />
    </>
  );
};

export default Home;
