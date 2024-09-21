import React from 'react';
import "./Events_paper_p.css";
import Event_sec_card from '../../widgets/Events_section_card/Events_section_card'; // Import default export
import secA1 from '../../asset/secA-1.png';
import secA2 from '../../asset/secA-2.png';
import secA3 from '../../asset/secA-3.webp';
const Events_secA = () => {
  return (
    <div className="secA_full-page-bg">
      <div className='secA_event_heading'> P A P E R <span className="heading-gap"> </span> P U R S U I T</div>
      <div className='secA_event_cards'>
       
          <Event_sec_card 
            image={secA1} 
            text="COLLOQUIUM" 
            subtext="- PAPER PURSUIT"
            targetUrl="/colloquium"
          />

       
       
          <Event_sec_card 
            image={secA2} 
            text="CIRCUITHON" 
            subtext="- PAPER PURSUIT"
            targetUrl="/books"
          />
           <Event_sec_card 
            image={secA3} 
            text="SHERLOCK HOLMES" 
            subtext="- PAPER PURSUIT"
            targetUrl="/sherlock"
          />
      
      </div>
    </div>
  );
};

export default Events_secA;
