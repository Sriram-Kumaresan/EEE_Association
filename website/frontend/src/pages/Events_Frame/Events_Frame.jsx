import React from 'react';
import "./Events_Frame.css";
import Event_sec_card from '../../widgets/Events_section_card/Events_section_card'; // Import default export
import secC1 from '../../asset/secC-1.png';
import secC2 from '../../asset/secC-2.png';

const Events = () => {
  return (
    <div className="secC_full-page-bg">
    <div className='secC_event_heading'> F R A M E <span className="heading-gap"> </span> F L I X    </div>
    <div className='secC_event_cards'>
      <Event_sec_card 
        image={secC1} 
        text="CINE BASH" 
        subtext="- FRAME FLIX"
        targetUrl="/book"
      />
      <Event_sec_card 
        image={secC2} 
        text="META SNAP" 
        subtext="- FRAME FLIX"
        targetUrl="/books"
      />
     
    </div>
  </div>
  
  );
};

export default Events;
