import React, { useState } from "react";
import "./commandesPage.css";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";

function CommandesPage() {
  const [ticketData, setTicketData] = useState({
    numberOfTickets: 0,
    selectedDates: [],
  });

  // Fonction pour mettre à jour les données du billet
  const handleTicketDataChange = (event) => {
    const { name, value } = event.target;
    setTicketData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fonction pour soumettre les données du billet
  const handleSubmit = (event) => {
    event.preventDefault();
    // Effectuer une action avec les données du billet (par exemple, les envoyer au serveur)
    console.log(ticketData);
  };

  return (
    <>
      <Header />
      <div className="form_wrapper">
        <div>
          <h2>Acheter</h2>
          <form className="form" onSubmit={handleSubmit}>
            <label className="label"> Nombre de billets :</label>
             
              <input className="input"
                min="1"
                type="number"
                name="numberOfTickets"
                value={ticketData.numberOfTickets}
                onChange={handleTicketDataChange}
              />
            
            <label className="label">
              Dates sélectionnées :
              </label>
              
              <select className="input"
                name="selectedDates"
                value={ticketData.selectedDates}
                onChange={handleTicketDataChange}  >
                   <option value="">-- Choisir --</option>
                <option value="date1">Passe 1 jour (15 juillet)</option>
                <option value="date2">Passe 1 jour (16 juillet)</option>
                <option value="date3">Passe 1 jour (17 juillet)</option>
                <option value="date4">Passe 3 jour</option>
                <option value="date5">Passe PREMIUM  </option>
                {/* Ajoutez ici d'autres options de date si nécessaire */}
              </select>
            
            <button className="btn" type="submit">Acheter</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CommandesPage;
