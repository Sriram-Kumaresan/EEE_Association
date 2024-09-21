import React from "react";
import "./Events.css";
import Event_card1 from "../../widgets/Event_rec_card/Event_rec_card"; // Import default export
import secA from "../../asset/secA.png";
import secB from "../../asset/secB.png";
import secC from "../../asset/secC.png";
import secD from "../../asset/secD.png";
import secE from "../../asset/secE.png";
import secF from "../../asset/secF.webp";

const Events = () => {
  return (
    <div className="full-page-bg">
      <div className="event_heading">E V E N T S</div>
      <div className="event_cards">
        <Event_card1 image={secA} text="PAPER PURSUIT" targetUrl="/events_paper_p" />
        <Event_card1 image={secB} text="PROJECTOPOLY" targetUrl="/events_Project" />
        <Event_card1 image={secC} text="FRAME FLIX" targetUrl="/events_Frame" />
        <Event_card1 image={secD} text="TREASUREC LOGIC" targetUrl="/events_Treasure" />
        <Event_card1 image={secE} text="CIRCUIT CHARADES" targetUrl="/events_Circuit" />
        <Event_card1 image={secF} text="PHOTON KICKOFF" targetUrl="/events_photon" />
      </div>
    </div>
  );
};

export default Events;
