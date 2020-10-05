import React from "react";
import { Link } from "react-router-dom";

const WhatWedo = () => {
  return (
  <section className="page-section bg-primary mb-0 section clearfix">
    <div class="container">
      <div class="intro">
        <img class="intro-img rightImage img-fluid mb-3 mb-lg-0" src="../images/lab.jpg" alt=""/>
        <div class="intro-text textLeft bg-faded about">
          <h3 class="section-heading mb-4">
            <span>What we do</span>
          </h3>
          <p class="mb-3 changeFont">We host and promote many events such as panel discussions from companies, chill nights, mentorship programs, career talks and many more opportunities for networking.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default WhatWedo;
