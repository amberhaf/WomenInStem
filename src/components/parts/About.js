import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
  <section className="page-section bg-primary mb-0 section clearfix">
    <div class="container">
      <div class="intro">
        <img class="intro-img leftImage img-fluid mb-3 mb-lg-0" src="../images/code.jpg" alt=""/>
        <div class="intro-text rightText bg-faded about">
          <h3 class="section-heading mb-4">
            <span>About</span>
          </h3>
          <p class="mb-3 changeFont">Maynooth University Women In STEM Society focuses on celebrating and empowering Women in Science, Technology, Engineering and Maths (STEM) related subjects in Maynooth University.
          </p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
