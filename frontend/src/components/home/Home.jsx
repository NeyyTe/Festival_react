import React from "react";
import "./home.css";

function Home() {
  return (
    <>
      <main className="main">
        <div className="main_container">
          <div className="left">
            <div className="festival_pic"></div>
          </div>

          <div className="right">
            <div className="main_title_right">
              <h1>LES NUITS SECRÈTES</h1>
            </div>

            <p className="premier_concert_rock">Le premier concert à Cambrai</p>

            <div className="date">
              <p>15 - 17 Juillet 2023</p>
            </div>
            <div className="location">
              <p>Au Lycée Fénélon</p>
            </div>
            <div className="button_tickets">
              <a className="neon-button" href="#">
                Acheter vos tickets !
              </a>
            </div>

            <div className="arroww bounce">
              <a className="fa fa-arrow-down fa-2x" href="#"></a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
