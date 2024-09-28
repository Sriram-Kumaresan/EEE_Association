import React from 'react';
import "./Events_Circuit.css";
import Event_sec_card from '../../widgets/Events_section_card/Events_section_card'; // Import default export
import secE1 from '../../asset/secE-1.png';
import secE2 from '../../asset/secE-2.png';

const Events = () => {
  return (
    <div className="secE_full-page-bg">
    <div className='secE_event_heading'> C I R C U I T  <span className="heading-gap"> </span>C H A R A D E S</div>
    <div className='secE_event_cards'>
      <Event_sec_card 
        image={secE1} 
        text="UNLOCK THE CONTRAPTION" 
        subtext="- CIRCUIT CHARADES"
        targetUrl="/book"
      />
      <Event_sec_card 
        image={secE2} 
        text="FLASHGLEE" 
        subtext="- CIRCUIT CHARADES"
        targetUrl="/flash"
      />
     
    </div>
  </div>
  
  );
};

export default Events;
