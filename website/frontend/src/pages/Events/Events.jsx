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
        <Event_card1 image={secA} text="PAPER PURSUIT" targetUrl="/paperpursuit" />
        <Event_card1 image={secB} text="PROJECTOPOLY" targetUrl="/projectopoly" />
        <Event_card1 image={secC} text="FRAME FLIX" targetUrl="/frameflix" />
        <Event_card1 image={secD} text="TREASUREC LOGIC" targetUrl="/treasurelogic" />
        <Event_card1 image={secE} text="CIRCUIT CHARADES" targetUrl="/circuitcharades" />
        <Event_card1 image={secF} text="PHOTON KICKOFF" targetUrl="/photonkickoff" />
      </div>
    </div>
  );
};

export default Events;
