import React from "react";
import "./tickets.css";
import Header from "../../components/header/Header.jsx";
import { Link } from "react-router-dom";
import {Helmet} from 'react-helmet'



function TicketsPage({ price, date, onDelete }) {
  return (
    <>
    <Helmet>
        <title>LNS - Tickets</title>
        <meta name="description" content=" Faites votre choix parmi une sélection de tickets et réservez dès maintenant votre place pour l'événement de vos rêves. " />
    </Helmet>
      <Header />
     
        <section className="section_tickets">
          <h1>Tickets</h1>
        <div className="bg_fleurs_left"></div>
        <div className="bg_fleurs_right"></div>
          <div className="containerr">
            <div className="box">
              <div className="title">
                <h2>Pass 1 jour</h2>
              </div>
              <div className="price">
                <h4>
                  <sup>€</sup>45
                </h4>
              </div>
              <div className="option">
                <ul>
                  <li>Vestiaires </li>
                  <li>Stands d'eau (1 bouteille gratuite)</li>
                  <li>Accés parc aquatique</li>
                  <li>1 goodie offert</li>
                </ul>
              </div>
              <Link to ="/commandes" className="btnn">
                Commander maintenant
              </Link>
            </div>
          

            <div className="box">
              <div className="title">
                <h2>Pass 3 jours</h2>
              </div>
              <div className="price">
                <h4>
                  <sup>€</sup>79
                </h4>
              </div>
              <div className="option">
                <ul>
                  <li>Vestiaires</li>
                  <li>Stands d'eau (1 bouteille gratuite)</li>
                  <li>Camping</li>
                  <li>1 goodie + 15 tokens offert</li>
                </ul>
              </div>
              <Link to ="/commandes" className="btnn">
                Commander maintenant
              </Link>
            </div>

            <div className="box">
              <div className="title">
                <h2>Pass Premium</h2>
              </div>
              <div className="price">
                <h4>
                  <sup>€</sup>139
                </h4>
              </div>
              <div className="option">
                <ul>
                  <li>Accés exclusif aux backstages</li>
                  <li>Rencontre avec les artistes</li>
                  <li>Chambres VIP</li>
                  <li>Buffet et boissons à volonté</li>
                </ul>
              </div>
              <Link to ="/commandes" className="btnn">
                Commander maintenant
              </Link>
            </div>
          </div>
        </section>
     
    </>
  );
}

export default TicketsPage;
