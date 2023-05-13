import React from "react";
import "./footer.css";

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
              <div><img src={logo} alt="" /></div>
            </div>
            <div className="premiere_col footer-col">
              <h4>L'entreprise</h4>
              <ul>
                <li>
                  <a href="#">Mention Légales</a>
                </li>
                <li>
                  <a href="#">Conditions Générales</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Nous Contacter</h4>
              <ul>
                <li>
                  <a href="mailto:maxxence.marechal@gmail.com"> Email</a>
                </li>
                <li>
                  <a href="tel:+33684169326"> Téléphone</a>
                </li>
                <li>
                  <a href="">Localisation</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <div className="social_paiement_container">
                <h4>Retrouvez-nous sur les réseaux :</h4>
                <div className="social_links">
                  <a className="spacing_img_réseaux" href="#">
                    <img src={Facebook} alt="facebook" />
                  </a>
                  <a href="#">
                    <img src={Twitter_logo} alt="twitter" />
                  </a>
                  <a className="spacing_img_réseaux" href="#">
                    <img src={Insta_logo} alt="instagram" />
                  </a>
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
