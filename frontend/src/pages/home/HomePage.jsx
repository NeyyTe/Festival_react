
import React from "react";
import "./homePage.css";

//Import Composants
import Header from "../../components/header/Header";
import Home from "../../components/home/Home";
import Slider from "../../components/slider/Slider";
import Footer from "../../components/footer/Footer";

//IMPORT IMAGES
import car from "./images/car.png";
import lockers from "./images/lockers.png";
import camping from "./images/camping.png";
import water from "./images/water.png";
import iso_festival from "./images/iso_festival.png";
import waterslide from "./images/waterslide.png";
import festival_place from "./images/festival_place.png";

// Logo Sponsors Banner
import perrier from "./images/logos_sponso/perrier.png";
import paix_dieu from "./images/logos_sponso/paix_dieu.webp";
import Logo_Quies from "./images/logos_sponso/Logo_Quies.png";
import Jagermeister_Logo from "./images/logos_sponso/Jagermeister_Logo.png";
import doliprane from "./images/logos_sponso/doliprane.jpg";
import quechua from "./images/logos_sponso/quechua.svg";
import justin_bridou from "./images/logos_sponso/justin_bridou.png";



function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <Slider />

      <div className="features_wrapper">
        <div className="features">
          <div className="features_cards">
            <div>
              <img src={car} alt="car" />
            </div>
            <p>Parking facile</p>
            <span>
              Garez vous sur notre parking de 2500 places à 5 minutes de la gare
            </span>
          </div>

          <div className="features_cards">
            <div>
              <img src={camping} alt="camping" />
            </div>
            <p>Espace tentes</p>
            <span>
              Profitez de 3000 m² de terrain pour vous installer confortablement
            </span>
          </div>

          <div className="features_cards">
            <div>
              <img src={lockers} alt="lockers" />
            </div>
            <p>Vestiaires</p>
            <span>
              Rangez vos affaires en toute sécurité en utilisant nos vestiaires
              dédiés
            </span>
          </div>

          <div className="features_cards">
            <div>
              <img src={water} alt="water" />
            </div>
            <p>Stands d'eau</p>
            <span>Restez hydraté en vous rendant dans nos nombreux stands</span>
          </div>
        </div>
        <div className="link_information_wrapper">
          <a class="link_information" href="">
            Plus d'informations
          </a>
        </div>
      </div>

      <div class="wave_separator">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

      <section class="section1_experience">
        <h2>Une éxpérience <span>inoubliable</span></h2>

        <div class="section1_content">
          <div>
            <img src={iso_festival} alt="festival_vue_isométric" />
          </div>
          <div class="section1_text">
            <h3>Un line-up exceptionnel</h3>
            <p>
              Nos artistes ont été soigneusement sélectionnés pour offrir une
              <span> expérience musicale de haute qualité</span>, avec des
              performances énergiques et mémorables qui feront danser et chanter
              les foules.
            </p>
          </div>
        </div>

        <div class="section1_content">
          <div class="section1_text">
            <h3>Des activités variées</h3>
            <p>
              Notre festival propose une variété d'activités pour satisfaire
              tous les goûts, des <span>attractions aquatique</span> aux
              <span> feux d'aritifices</span>, en passant par les
              <span> dégustations de nourritures</span> et
              <span> de boissons locales</span>.
            </p>
          </div>
          <div>
            <img src={waterslide} alt="jeu aquatique" />
          </div>
        </div>

        <div class="section1_content">
          <div>
            <img src={festival_place} alt="festival place stands" />
          </div>
          <div class="section1_text">
            <h3>Une atmosphère unique </h3>
            <p>
              Le site de notre festival est aménagé pour offrir{" "}
              <span>une expérience immersive</span>, avec{" "}
              <span>des scènes spectaculaires</span>, des installations
              artistiques et <span>des espaces de détente</span> pour se reposer
              entre les performances.
            </p>
          </div>
        </div>
      </section>

      <section class="banner_sponso_wrapper">
        <div className="banner">
          <img src={perrier} alt="Perrier" />
          <img src={paix_dieu} alt="Paix dieu" />
          <img class="jager" src={Jagermeister_Logo} alt="Jagermeinster" />
          <img src={Logo_Quies} alt="Quies" />
          <img class="jager" src={doliprane} alt="Doliprane" />
          <img src={quechua} alt="Quechua" />
          <img src={justin_bridou} alt="Justin_bridou" />
        </div>
      </section>
      
   <Footer />
      </>
  );
}

export default HomePage;
