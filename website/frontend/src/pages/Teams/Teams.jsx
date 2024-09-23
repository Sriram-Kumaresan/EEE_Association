import React, { useState } from 'react';
import './Teams.css';
import { Team_card, Modal } from "../../widgets";
import heading from '../../asset/team.svg';
import boy from '../../asset/Subtract.png';
import Genral from '../../asset/genral-sec.svg';
import Joint from '../../asset/joint-sec.svg';

const Teams = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null); // To store the selected team member's data
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state

  // Function to open modal with specific team member data
  const openModal = (teamData) => {
    setSelectedTeamMember(teamData); // Store the clicked team member's data
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedTeamMember(null); // Reset selected team member
  };

  const teamMembers = [
    {
      image: boy,
      name: "Solai Dhanush",
      designation: "General Secretary",
      designation_img: Genral,
    },
    {
      image: boy,
      name: "Solai Dhanush",
      designation: "Joint Secretary",
      designation_img: Joint,
    },
    {
      image: boy,
      name: "Solai Dhanush",
      designation: " Social Media",
      designation_img: Joint,
    },
    {
      image: boy,
      name: "Solai Dhanush",
      designation: "Joint Secretary",
      designation_img: Joint,
    },
    {
      image: boy,
      name: "Solai Dhanush",
      designation: "Joint Secretary",
      designation_img: Joint,
    },
    {
      image: boy,
      name: "Solai Dhanush",
      designation: "Joint Secretary",
      designation_img: Joint,
    },
    // Add more members here...
  ];

  return (
    <div className='Eee__teams-main'>
      <div className="Eee__teams-heading">
        <img className="Eee__teams-hd-img" src={heading} alt="Team" />
      </div>

      <div className="Eee__teams-card-container">
        {teamMembers.map((teamMember, index) => (
          <div key={index} onClick={() => openModal(teamMember)}>
            <Team_card
              image={teamMember.image}
              name={teamMember.name}
              designation={teamMember.designation}
              designation_img={teamMember.designation_img}
            />
          </div>
        ))}
      </div>

      {/* Render Modal only when it's open */}
      {isModalOpen && selectedTeamMember && (
        <Modal
          heading={selectedTeamMember.name}
          pic={selectedTeamMember.image}
          content_1={selectedTeamMember.designation} 
          content_2="" // You can customize this
          onClose={closeModal} // Close modal on button click
        />
      )}
    </div>
  );
};

export default Teams;
