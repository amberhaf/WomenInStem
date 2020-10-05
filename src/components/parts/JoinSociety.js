import React from "react";
import { Link } from "react-router-dom";

const JoinSociety = () => {
  return (
  <section className="page-section bg-primary mb-0 section" id="portfolio">
    <div className="container">
        <div className="row text-center">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <img src="../images/friends.png" alt="" />
                    </a>
                    <div>
                        <h4>JOIN THE GANG</h4>
                        <p className="description changeFont">Our society is open to all genders and identities who would like to encourage equality, diversity and inclusion in Maynooth University. We strive to inspire a wider and more diverse group of individuals to engage in and pursue STEM activities.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="portfolio-item">
                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <img src="../images/friends.png" alt="" />
                    </a>
                    <div>
                        <h4>MEET THE SOCIETY</h4>
                        <p className="description changeFont">We are a committee of students passionate about STEM, women's empowerment and diversity. Each one of us is excited to bring many events and opportunitites to you this year. We cannot wait to meet you all and expand our circle of inclusion and representation even more.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>

  );
};

export default JoinSociety;
