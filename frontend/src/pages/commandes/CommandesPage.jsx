import React,{ useState } from 'react'
import './commandesPage.css'
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";




function CommandesPage() {
 
  const [ticketData, setTicketData] = useState({
    numberOfTickets: 0,
    selectedDates: []
  });

  // Fonction pour mettre à jour les données du billet
  const handleTicketDataChange = (event) => {
    const { name, value } = event.target;
    setTicketData((prevData) => ({
      ...prevData,
      [name]: value
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
    <Header/>
    <div className="form_wrapper">
      <div >
        <h2>Acheter</h2>
        <form className='form' onSubmit={handleSubmit}>
          <label>
            Nombre de billets :
            <input
              type="number"
              name="numberOfTickets"
              value={ticketData.numberOfTickets}
              onChange={handleTicketDataChange}
            />
          </label>
          <label>
            Dates sélectionnées :
            <input
              type="text"
              name="selectedDates"
              value={ticketData.selectedDates}
              onChange={handleTicketDataChange}
            />
          </label>
          <button type="submit">Acheter</button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}  
  
export default CommandesPage