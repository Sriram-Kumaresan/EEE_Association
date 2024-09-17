import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Event_rec_card.css'; 

const Event_card1 = ({ image, text, targetUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetUrl); // This will navigate to the correct URL when clicked
  };

  return (
    <div className="card-widget" onClick={handleClick}>
      <div>
      <img src={image} alt="Card visual" className="card-image" />
      </div>
      <div>
      <div className="card-text">{text}</div>
      </div>
    </div>
  );
};


export default Event_card1;
