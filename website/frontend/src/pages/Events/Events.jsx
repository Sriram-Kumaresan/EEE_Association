import React from 'react';
import "./Events.css";
import Event_card1 from '../../widgets/Event_rec_card/Event_rec_card'; // Import default export
import secA from '../../asset/secA.png'; // Adjusted path
import secB from '../../asset/secB.png';
import secC from '../../asset/secC.png';
import secD from '../../asset/secD.png';
import secE from '../../asset/secE.png';

const Events = () => {
  return (
    <div className="full-page-bg">
    <div className='event_heading'>E V E N T S</div>
    <div className='event_cards'>
      <Event_card1 
        image={secA} 
        text="SECTION A" 
        targetUrl="/book"
      />
      <Event_card1 
        image={secB} 
        text="SECTION B" 
        targetUrl="/books"
      />
      <Event_card1 
        image={secC} 
        text="SECTION C" 
        targetUrl="/books"
      />
      <Event_card1 
        image={secD} 
        text="SECTION D" 
        targetUrl="/books"
      />
      <Event_card1 
        image={secE} 
        text="SECTION E" 
        targetUrl="/books"
      />
    </div>
  </div>
  
  );
};

export default Events;
