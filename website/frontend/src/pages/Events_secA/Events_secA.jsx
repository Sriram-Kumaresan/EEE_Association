import React from 'react';
import "./Events_secA.css";
import Event_sec_card from '../../widgets/Events_section_card/Events_section_card'; // Import default export
import secA1 from '../../asset/secA-1.png';
import secA2 from '../../asset/secA-2.png';

const Events_secA = () => {
  return (
    <div className="secA_full-page-bg">
      <div className='secA_event_heading'> S E C T I O N <span className="heading-gap"> </span> A</div>
      <div className='secA_event_cards'>
       
          <Event_sec_card 
            image={secA1} 
            text="COLLOQUIUM" 
            subtext="- PAPER PRESENTATION"
            targetUrl="/book"
          />
       
       
          <Event_sec_card 
            image={secA2} 
            text="ROBO FUSSBALL" 
            subtext="- ROBO SOCCER"
            targetUrl="/books"
          />
      
      </div>
    </div>
  );
};

export default Events_secA;
