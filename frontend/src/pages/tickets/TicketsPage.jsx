import React from 'react'
import './tickets.css'
import Header from "../../components/header/Header.jsx";

function TicketsPage() {
  return (
    <>
    <Header/>
    <body>
<section className="section_tickets">
  <h1>Acheter vos tickets</h1>
  <div className="containerr">
      <div className="box">
        <div className="title">
          <i className="fa fa-paper-plane" aria-hidden="true"></i>
          <h2>Basic</h2>
        </div>
        <div className="price">
          <h4><sup>€</sup>25</h4>
        </div>
        <div className="option">
          <ul>
            <li>10 Gb d'espace</li>
            <li>3 noms de domaine</li>
            <li>20 emails</li>
            <li>Support en direct</li>
          </ul>
        </div>
        <a href="https://codepen.io/collection/XdWJOQ/" className="btn">Commander maintenant</a>
      </div>
      <div className="box">
        <div className="title">
          <i className="fa fa-plane" aria-hidden="true"></i>
          <h2>Standard</h2>
        </div>
        <div className="price">
          <h4><sup>€</sup>50</h4>
        </div>
        <div className="option">
          <ul>
            <li>50 Gb d'espace</li>
            <li>5 noms de domaine</li>
            <li>Emails illimités</li>
            <li>Support en direct</li>
          </ul>
        </div>
        <a href="https://codepen.io/collection/XdWJOQ/" className="btn">Commander maintenant</a>
      </div>
      <div className="box">
        <div className="title">
       
          <h2>Premium</h2>
        </div>
        <div className="price">
          <h4><sup>€</sup>100</h4>
        </div>
        <div className="option">
          <ul>
            <li>Espace illimité</li>
            <li>30 noms de domaine</li>
            <li>Emails illimités</li>
            <li>Support en direct</li>
          </ul>
        </div>
        <a href="https://codepen.io/collection/XdWJOQ/" className="btn">Commander maintenant</a>
      </div>
    </div>
</section>

 


    </body>
    </>
  )
}

export default TicketsPage