import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Events_section_card.css'; // Assuming you create a separate CSS file

const Event_sec_card= ({ image, text, subtext, targetUrl }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetUrl);
  };

  return (
    <div className="sec_card-widget" onClick={handleClick}>
      <div><img src={image} alt="Card visual" className="sec_card-image" /></div>
      <div className='sec_card_texts'>
      <div><span className="sec_card-text">{text}</span></div>
      <div><span className="sec_cardsub-text">{subtext}</span></div>
    </div>
    </div>
  );
};

export default Event_sec_card;
