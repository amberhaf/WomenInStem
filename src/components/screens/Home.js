import React from "react";
import Footer from "../parts/Footer";
import Navbar from "../parts/Navbar";
import About from "../parts/About";
import WhatWedo from "../parts/WhatWeDo";
import Join from "../parts/Join";
import JoinSociety from "../parts/JoinSociety";
import Header from "../parts/Header";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <WhatWedo />
      <Join />
      <JoinSociety />
      <Footer />
    </>
  );
};

export default Home;
