import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import "../media_query/MediaQuery.css";

import logo from "./images/logo.png";

// Logo Réseaux sociaux
import Facebook from "./images/Facebook.png";
import Twitter_logo from "./images/Twitter_logo.png";
import Insta_logo from "./images/Insta_logo.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_container">
          <div className="row">
            <div className="logo_footer footer-col">
              <div>
                <img loading="lazy" src={logo} alt="logo LNS" />
              </div>
            </div>
            <div className="premiere_col footer-col">
              <h4>L'entreprise</h4>
              <ul>
                <li>
                  <Link to="">Mention Légales</Link>
                </li>
                <li>
                  <Link to="">Conditions Générales</Link>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Nous Contacter</h4>
              <div>
                <ul>
                  <li>
                    <Link to="mailto:maxxence.marechal@gmail.com"> Email</Link>
                  </li>
                  <li>
                    <Link to="tel:+33684169326"> Téléphone</Link>
                  </li>
                  <li>
                    <Link to="">Localisation</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-col">
              <div className="social_paiement_container">
                <h4>Retrouvez-nous sur les réseaux :</h4>
                <div className="social_links">
                  <Link
                    className="spacing_img_réseaux"
                    to="https://www.facebook.com/"
                    target="_blank"
                  >
                    <img loading="lazy" src={Facebook} alt="facebook" />
                  </Link>

                  <Link to="https://twitter.com/?lang=fr" target="_blank">
                    <img loading="lazy" src={Twitter_logo} alt="twitter" />
                  </Link>

                  <Link
                    className="spacing_img_réseaux"
                    to="https://www.instagram.com/"
                    target="_blank"
                  >
                    <img loading="lazy"src={Insta_logo} alt="instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="dog"></span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
