import React from 'react';
import "./Events_secC.css";
import Event_sec_card from '../../widgets/Events_section_card/Events_section_card'; // Import default export
import secC1 from '../../asset/secC-1.png';
import secC2 from '../../asset/secC-2.png';

const Events = () => {
  return (
    <div className="secC_full-page-bg">
    <div className='secC_event_heading'> S E C T I O N <span className="heading-gap"> </span> C</div>
    <div className='secC_event_cards'>
      <Event_sec_card 
        image={secC1} 
        text="INOVATION FAIR" 
        subtext="- PROJECT EXPO"
        targetUrl="/book"
      />
      <Event_sec_card 
        image={secC2} 
        text="CIRCUITHON" 
        subtext="- BUG FIX"
        targetUrl="/books"
      />
     
    </div>
  </div>
  
  );
};

export default Events;
