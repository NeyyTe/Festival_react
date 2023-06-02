import React from "react";
import FestivalTicket from "../../components/festivalTickets/FestivalTickets.jsx";
import "./adminPage.css";
import Header from "../../components/header/Header.jsx";

const AdminPage = () => {
  const tickets = [
    { id: 1, name: "Billet normal", price: 10, date: "01/07/2023" },
    { id: 2, name: "Billet VIP", price: 25, date: "02/07/2023" },
    { id: 3, name: "Billet groupe", price: 8, date: "03/07/2023" },
  ];

  const handleTicketDelete = (ticketId) => {
    // TODO: Implémentez la logique pour supprimer le billet avec l'ID donné.
    console.log(`Suppression du billet avec l'ID ${ticketId}`);
  };

  return (
    <>
      <Header />
      <div className="admin_wrapper">
        <h2>Gestion des billets de festival</h2>
        {tickets.map((ticket) => (
          <FestivalTicket
            key={ticket.id}
            name={ticket.name}
            price={ticket.price}
            date={ticket.date}
            onDelete={() => handleTicketDelete(ticket.id)}
          />
        ))}
      </div>
    </>
  );
};

export default AdminPage;
