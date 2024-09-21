import React from 'react';
import "./Events_secB.css";
import Event_sec_card from '../../widgets/Events_section_card/Events_section_card'; // Import default export
import secB1 from '../../asset/secB-1.png';
import secB2 from '../../asset/secB-2.png';

const Events = () => {
  return (
    <div className="secB_full-page-bg">
    <div className='secB_event_heading'> S E C T I O N <span className="heading-gap"> </span> B</div>
    <div className='secB_event_cards'>
      <Event_sec_card 
        image={secB1} 
        text="INOVATION FAIR" 
        subtext="- PROJECT EXPO"
        targetUrl="/book"
      />
      <Event_sec_card 
        image={secB2} 
        text="CIRCUITHON" 
        subtext="- BUG FIX"
        targetUrl="/books"
      />
     
    </div>
  </div>
  
  );
};

export default Events;
