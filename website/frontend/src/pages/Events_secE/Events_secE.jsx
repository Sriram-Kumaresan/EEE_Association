import React from 'react';
import "./Events_secE.css";
import Event_sec_card from '../../widgets/Events_section_card/Events_section_card'; // Import default export
import secE1 from '../../asset/secE-1.png';
import secE2 from '../../asset/secE-2.png';

const Events = () => {
  return (
    <div className="secE_full-page-bg">
    <div className='secE_event_heading'> S E C T I O N <span className="heading-gap"> </span> E</div>
    <div className='secE_event_cards'>
      <Event_sec_card 
        image={secE1} 
        text="INOVATION FAIR" 
        subtext="- PROJECT EXPO"
        targetUrl="/book"
      />
      <Event_sec_card 
        image={secE2} 
        text="CIRCUITHON" 
        subtext="- BUG FIX"
        targetUrl="/books"
      />
     
    </div>
  </div>
  
  );
};

export default Events;
