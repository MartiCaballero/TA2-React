import React from 'react';
import './Card.css'; // Mantén los estilos o ajustalos según lo necesites

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export default Card;
