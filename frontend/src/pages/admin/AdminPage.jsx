// import React from "react";
// import FestivalTicket from "../../components/festivalTickets/FestivalTickets.jsx";
// import "./adminPage.css";
// import Header from "../../components/header/Header.jsx";

// const AdminPage = () => {
//   const tickets = [
//     { id: 1, name: "Billet normal", price: 10, date: "01/07/2023" },
//     { id: 2, name: "Billet VIP", price: 25, date: "02/07/2023" },
//     { id: 3, name: "Billet groupe", price: 8, date: "03/07/2023" },
//   ];

//   const handleTicketDelete = (ticketId) => {
//     // TODO: Implémentez la logique pour supprimer le billet avec l'ID donné.
//     console.log(`Suppression du billet avec l'ID ${ticketId}`);
//   };

//   return (
//     <>
//       <Header />
//       <div className="admin_wrapper">
//         <h2>Gestion des billets de festival</h2>
//         {tickets.map((ticket) => (
//           <FestivalTicket
//             key={ticket.id}
//             name={ticket.name}
//             price={ticket.price}
//             date={ticket.date}
//             onDelete={() => handleTicketDelete(ticket.id)}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default AdminPage;

import React, { useRef, useState } from "react";
import "./adminPage.css";
import Header from "../../components/header/Header.jsx";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";


function AddList({ setList }) {
  const nameRef = useRef();
  const priceRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const newlist = {
      id: 4,
      name,
      price,
    };
    setList((prevList) => {
      return prevList.concat(newlist);
    });
    nameRef.current.value = "";
    priceRef.current.value = "";
  }
  return (
    <div>
      <h1>CRUD</h1>
      <form className="addForm" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Entrer le billet" ref={nameRef} />
        <input
          type="text"
          name="price"
          placeholder="Entrer le prix"
          ref={priceRef}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}


function CRUD() {
  const list = [
    { id: 1, name: "Pass 1 jour", price: 45, date: "01/07/2023" },
    { id: 2, name: "Pass 2 jour", price: 79, date: "02/07/2023" },
    { id: 3, name: "Pass PREMIUM", price: 139, date: "03/07/2023" },
  ];
  const [lists, setList] = useState(list);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div className="crud">
      <Header />
      <div className="form_container">
        <AddList setList={setList} />
        <form onSubmit={handleSubmit}>
          <table>
            {lists.map((current) =>
              updateState === current.id ? (
                <EditList current={current} lists={lists} setList={setList} />
              ) : (
                <tr>
                  <td>{current.name}</td>
                  <td>{current.price}</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      <EditIcon />
                    </button>
                    <button
                      className="delete"
                      type="button"
                      onClick={() => handleDelete(current.id)}
                    >
                      <DeleteForeverIcon />
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );

  function handleEdit(id) {
    setUpdateState(id);
  }
  function handleDelete(id) {
    const newlist = lists.filter((li) => li.id !== id);
    setList(newlist);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const newlist = lists.map((li) =>
      li.id === updateState ? { ...li, name: name, price: price } : li
    );

    setList(newlist);
    setUpdateState(-1);
  }
}

function EditList({ current, lists, setList }) {
  function handInputname(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, name: value } : li
    );

    setList(newlist);
  }
  function handInputprice(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, price: value } : li
    );

    setList(newlist);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handInputname}
          name="name"
          value={current.name}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputprice}
          name="price"
          value={current.price}
        />
      </td>
      <td>
        <button type="submit">Mettre à jour</button>
      </td>
    </tr>
  );
}



export default CRUD;
