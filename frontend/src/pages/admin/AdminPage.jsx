import React, { useRef, useState } from "react";
import "./adminPage.css";
import Header from "../../components/header/Header.jsx";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

function AddList({ setList }) {
  const passRef = useRef();
  const nameRef = useRef();
  const fnameRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const pass = event.target.elements.pass.value;
    const name = event.target.elements.name.value;
    const fname = event.target.elements.fname.value;
    const price = event.target.elements.price.value;
    const quantity = event.target.elements.quantity.value;
    const newlist = {
      id: 4,
      pass,
      name,
      fname,
      price,
      quantity,
    };
    setList((prevList) => {
      return prevList.concat(newlist);
    });
    passRef.current.value = "";
    nameRef.current.value = "";
    fnameRef.current.value = "";
    priceRef.current.value = "";
    quantityRef.current.value = "";
  }
  return (
    <div className="add_form_wrapper">
      
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <select name="pass" id="pass" ref={passRef}>
          <option value="">Choisir un Pass</option>
          <option value="Pass 1 jour">Pass 1 jour</option>
          <option value="Pass 2 jour">Pass 2 jour</option>
          <option value="Pass PREMIUM">Pass PREMIUM</option>
        </select>
        <input name="name" placeholder="Entrer le nom" ref={nameRef} />
        <input name="fname" placeholder="Entrer le prénom" ref={fnameRef} />
        <input
          name="quantity"
          placeholder="Entrer le nombre de billets"
          ref={quantityRef}
        />
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
    {
      id: 1,
      pass: "Pass 1 jour",
      name: "Poivre d'Arvor",
      fname: "Patrick",
      quantity: "2",
      price: 45,
    },
    {
      id: 2,
      pass: "Pass 2 jour",
      name: "Reichman",
      fname: "Jean-Luc",
      quantity: "3",
      price: 79,
    },
    {
      id: 3,
      pass: "Pass PREMIUM",
      name: "Laborde",
      fname: "Catherine ",
      quantity: "1",
      price: 139,
    },
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
            <thead>
            <tr>
              <td>Type de pass</td>
              <td>Nom</td>
              <td>Prénom</td>
              <td>Quantité</td>
              <td>Prix</td>
              <td></td>
            </tr>
            </thead>
           
            {lists.map((current) =>
              updateState === current.id ? (
                <EditList current={current} lists={lists} setList={setList} />
              ) : (
                <tbody>
                  <tr>
                    <td>{current.pass}</td>
                    <td>{current.name}</td>
                    <td>{current.fname}</td>
                    <td>{current.quantity}</td>
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
                </tbody>
                
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
    const pass = event.target.elements.pass.value;
    const name = event.target.elements.name.value;
    const fname = event.target.elements.fname.value;
    const quantity = event.target.elements.quantity.value;
    const price = event.target.elements.price.value;
    const newlist = lists.map((li) =>
      li.id === updateState
        ? {
            ...li,
            pass: pass,
            name: name,
            fname: fname,
            quantity: quantity,
            price: price,
          }
        : li
    );

    setList(newlist);
    setUpdateState(-1);
  }
}

function EditList({ current, lists, setList }) {
  function handInputpass(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, pass: value } : li
    );

    setList(newlist);
  }

  function handInputname(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, name: value } : li
    );

    setList(newlist);
  }

  function handInputfname(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, fname: value } : li
    );

    setList(newlist);
  }

  function handInputquantity(event) {
    const value = event.target.value;
    const newlist = lists.map((li) =>
      li.id === current.id ? { ...li, quantity: value } : li
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
        <select name="pass" id="pass" onChange={handInputpass}>
          <option value="Pass 1 jour">Pass 1 jour</option>
          <option value="Pass 2 jour">Pass 2 jour</option>
          <option value="Pass PREMIUM">Pass PREMIUM</option>
        </select>
      </td>
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
          onChange={handInputfname}
          name="fname"
          value={current.fname}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputquantity}
          name="quantity"
          value={current.quantity}
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
