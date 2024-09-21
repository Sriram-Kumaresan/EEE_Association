import React from 'react';
import "./Events_Project.css";
import Event_sec_card from '../../widgets/Events_section_card/Events_section_card'; // Import default export
import secB1 from '../../asset/secB-1.png';
import secB2 from '../../asset/secB-2.png';
import secB3 from '../../asset/secB-3.webp';
const Events = () => {
  return (
    <div className="secB_full-page-bg">
    <div className='secB_event_heading'> P R O J E C T O P O L Y  {/*<span className="heading-gap"> </span> B*/}</div> 
    <div className='secB_event_cards'>

      <Event_sec_card 
        image={secB1} 
        text="TYCOON RUMBLE" 
        subtext="-PROJECTOPOLY"
        targetUrl="/tycoon"
      />
      <Event_sec_card 
        image={secB2} 
        text="PROJECT PRESENTATION" 
        subtext="-PROJECTOPOLY"
        targetUrl="/books"
      />
      <Event_sec_card 
        image={secB3} 
        text="SNACKS AND LADDERS" 
        subtext="-PROJECTOPOLY"
        targetUrl="/snakes"
      />
     
    </div>
  </div>
  
  );
};

export default Events;
