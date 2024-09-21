import React from 'react';
import "./Events_photon.css";
import Event_sec_card from '../../widgets/Events_section_card/Events_section_card'; // Import default export
import secF1 from '../../asset/secF-1.webp';
import secF2 from '../../asset/secF-2.webp';

const Events = () => {
  return (
    <div className="secF_full-page-bg">
    <div className='secF_event_heading'> P H O T O N <span className="heading-gap"> </span>K I C K O F F</div>
    <div className='secF_event_cards'>
      <Event_sec_card 
        image={secF1} 
        text="DIALUX" 
        subtext="- PHOTON KICKOFF"
        targetUrl="/book"
      />
      <Event_sec_card 
        image={secF2} 
        text="ROBOFLUSS BALL" 
        subtext="-PHOTON KICKOFF"
        targetUrl="/books"
      />
     
    </div>
  </div>
  
  );
};

export default Events;
