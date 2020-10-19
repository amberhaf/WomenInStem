import React from "react";
import Footer from "../parts/Footer";
import Navbar from "../parts/Navbar";
import Event from "../parts/Event";
import EventHead from "../parts/EventHead";

const Events = () => {
  return (
    <>
      <Navbar />
      <EventHead/>
      <Event />
      <Footer />
    </>
  );
};

export default Events;
