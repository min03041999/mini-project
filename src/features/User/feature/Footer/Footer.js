import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>I'mM Store</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <Link to="/Company">Company</Link>
                </li>
                <li>
                  <Link to="/Team">Team</Link>
                </li>
                <li>
                  <Link to="/Careers">Careers</Link>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>I'mM Company</h3>
              <p>
                Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis
                tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel
                in justo.
              </p>
            </div>
            <div class="col item social">
              <Link to="/fb">
                <i class="icon ion-social-facebook"></i>
              </Link>
              <Link to="/tw">
                <i class="icon ion-social-twitter"></i>
              </Link>
              <Link to="/sn">
                <i class="icon ion-social-snapchat"></i>
              </Link>
              <Link to="/ins">
                <i class="icon ion-social-instagram"></i>
              </Link>
            </div>
          </div>
          <p class="copyright">Company Name © 2012</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
