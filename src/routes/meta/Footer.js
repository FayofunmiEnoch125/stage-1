import React from "react";
import "./Footer.css";
import LOGO_2 from "../../image/logo-2.svg";
import Facebook from "../../image/facebook.svg";
import Instagram from "../../image/instagram.svg";
import Twitter from "../../image/twitter.svg";
import Copyrights from "../../image/copyright.svg";

function Footer() {
  return (
    <footer className="meta__footer">
      <div className="wrapper">
        <div className="logo__column">
          <img src={LOGO_2} alt="Logo 2" />

          <ul className="social__links">
            <li>
              <a href="/">
                <img src={Facebook} alt="Facebook Logo" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Instagram} alt="instagram Logo" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={Twitter} alt="twitter Logo" />
              </a>
            </li>
          </ul>

          <span className="copyright">
            <img src={Copyrights} alt="copyright Logo" />
            2022 Metabnb
          </span>
        </div>

        <div className="column">
          <h4>Community</h4>
          <ul>
            <li>
              <a href="/">NFT</a>
            </li>
            <li>
              <a href="/">Tokens</a>
            </li>
            <li>
              <a href="/">Landlords</a>
            </li>
            <li>
              <a href="/">Discord</a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4>Places</h4>
          <ul>
            <li>
              <a href="/">Castle</a>
            </li>
            <li>
              <a href="/">Farms</a>
            </li>
            <li>
              <a href="/">Beach</a>
            </li>
            <li>
              <a href="/">Learn More</a>
            </li>
          </ul>
        </div>

        <div className="column">
          <h4>About us</h4>
          <ul>
            <li>
              <a href="/">Road Map</a>
            </li>
            <li>
              <a href="/">Creators</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
