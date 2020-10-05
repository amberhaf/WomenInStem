import React from "react";

const Footer = () => {
  return (
    <footer class="footer text-center" id="footer">
            <div class="container">
                    <div>
                        <h4 class="mb-4">Contact</h4>
                        <h5 class="mb-4">womeninstem@mulife.ie</h5>
                        <h5 class="mb-4">Maynooth University Society</h5>
                    </div>
                    <div>
                        <h4 class="mb-4">Follow</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fab fa-fw fa-instagram"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fa fa-fw fa-envelope"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="#!"><i class="fa fa-fw fa-link"></i></a>
                    </div>
            </div>
    </footer>
  );
};

export default Footer;
