import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
      <div>
                  <nav className="navbar navbar-expand-lg bg-light sticky-top fixed" id="main-nav-bar">
    <a className="navbar-brand" href="#home">
        <img src="../images/logo.svg" className="logo navbar-sqnlogo d-inline-block align-top"/>
        <span className="websiteName">MU Women in</span><img src="../images/stem.svg" className="stemDesktop"></img>
    </a>
    <a className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <img src="../images/bars.svg" className="menu"/>
    </a>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link to="/"><a>Home</a></Link></li>
            <li className="nav-item"><Link to="/join"><a>Team</a></Link></li>
            <li className="nav-item"><Link to="/events"><a>Events</a></Link></li>
            <li className="nav-item"><Link to="/contact"><a>Contact</a></Link></li>
        </ul>
    </div>
</nav>
        </div>
   );
};

export default Navbar;
