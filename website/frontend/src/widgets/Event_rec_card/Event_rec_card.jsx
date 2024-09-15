import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Event_rec_card.css'; 

const Event_card1 = ({ image, text, targetUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetUrl);
  };

  return (
    <div className="card-widget" onClick={handleClick}>
      <img src={image} alt="Card visual" className="card-image" />
      <span className="card-text">{text}</span>
    </div>
  );
};

export default Event_card1;
