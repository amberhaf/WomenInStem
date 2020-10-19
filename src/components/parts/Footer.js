import React from "react";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
            <div className="container">
                    <div>
                        <h4 className="mb-4">Contact</h4>
                        <h5 className="mb-4">womeninstem@mulife.ie</h5>
                        <h5 className="mb-4">Maynooth University Society</h5>
                    </div>
                    <div>
                        <h4 className="mb-4">Follow</h4>
                        <a className="col btn btn-outline-light btn-social mx-1" href="https://mulife.ie/society/women-in-stem"><i className="fab fa-fw fa-instagram"></i></a>
                        <a className="col btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/company/mu-women-in-stem"><i className="fab fa-fw fa-linkedin-in"></i></a>
                        <a className="col btn btn-outline-light btn-social mx-1" href="https://www.instagram.com/mu_womeninstem"><i className="fa fa-fw fa-link"></i></a>
                    </div>
            </div>
    </footer>
  );
};

export default Footer;
