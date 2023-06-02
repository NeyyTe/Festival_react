import React from 'react';
import PropTypes from 'prop-types';

const FestivalTicket = ({ name, price, date, onDelete }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Prix : {price} €</p>
      <p>Date : {date}</p>
      <button onClick={onDelete}>Supprimer</button>
    </div>
  );
};

FestivalTicket.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default FestivalTicket;
