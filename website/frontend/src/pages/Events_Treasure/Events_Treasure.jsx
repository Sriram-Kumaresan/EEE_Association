import React from 'react';
import "./Events_Treasure.css";
import Event_sec_card from '../../widgets/Events_section_card/Events_section_card'; // Import default export
import secD1 from '../../asset/secD-1.png';
import secD2 from '../../asset/secD-2.png';
import secD3 from '../../asset/secD-3.png';

const Events = () => {
  return (
    <div className="secD_full-page-bg">
    <div className='secD_event_heading'> T R E A S U R E <span className="heading-gap"> </span> C L O G I C</div>
    <div className='secD_event_cards'>
      <Event_sec_card 

        image={secD1} 
        text="ERROR EVASION" 
        subtext="- TREASURE CLOGIC"
        targetUrl="/book"
      />
      <Event_sec_card 
        image={secD2} 
        text="SCAVENGER HUNT" 
        subtext="- TREASURE CLOGIC"
        targetUrl="/books"
      />
       {/* <Event_sec_card 
        image={secD3} 
        text="CIRCUITHON" 
        subtext="- BUG FIX"
        targetUrl="/books"
      />
      */}
    </div>
  </div>
  
  );
};

export default Events;
