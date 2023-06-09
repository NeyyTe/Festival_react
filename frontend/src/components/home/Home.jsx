import React from "react";
import "./home.css";
import logo2 from "./images/logo2.png";
import "../media_query/MediaQuery.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <main className="main">
        <div className="main_container">
          <div className="left">
            <div className="festival_pic"></div>
          </div>

          <div className="right">
            <div>
              <img
                className="logo_main"
                src={logo2}
                alt="Logo Les Nuits Secrètes"
              />
            </div>
            <div className="main_title_right">
              <h1>LES NUITS SECRÈTES</h1>
            </div>

            <p className="premier_concert_rock"><strong>Le plus grand concert de Cambrai</strong></p>

            <div className="date">
              <p>15 - 17 Juillet 2023</p>
            </div>
            <div className="location">
              <p>Au Lycée Fénélon</p>
            </div>
            <div className="button_tickets">
              <Link to="/tickets" className="neon-button">
                Acheter vos tickets !
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
