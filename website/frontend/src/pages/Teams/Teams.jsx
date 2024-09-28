import React, { useState } from 'react';
import {
  teamStaffs,
  teamSecond,
  teamFourth,
  teamThird
} from '../../constants/teams';
import heading from '../../asset/team.svg';
import './Teams.css';
import { Team_card, Modal } from "../../widgets";


const Teams = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (teamData) => {
    setSelectedTeamMember(teamData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTeamMember(null);
  };

  return (
    <div className='Eee__teams-main'>
      <div className="Eee__teams-heading">
        <img className="Eee__teams-hd-img" src={heading} alt="Team" />
      </div>

      <div className="Eee__sub-heading">
        <p className='Eee__sub-heading-p'>Staffs Incharge</p>
      </div>

      <div className="Eee__teams-card-container">
        {teamStaffs.map((teamStaffs, index) => (
          <div key={index} onClick={() => openModal(teamStaffs)}>
            <Team_card
              image={teamStaffs.image}
              name={teamStaffs.name}
              designation={teamStaffs.designation}
              designation_img={teamStaffs.designation_img}
            />
          </div>
        ))}
      </div>

      <div className="Eee__sub-heading">
        <p className='Eee__sub-heading-p'>Final Year Student</p>
      </div>

      <div className="Eee__teams-card-container">
        {teamFourth.map((teamFourth, index) => (
          <div key={index} onClick={() => openModal(teamFourth)}>
            <Team_card
              image={teamFourth.image}
              name={teamFourth.name}
              designation={teamFourth.designation}
              designation_img={teamFourth.designation_img}
            />
          </div>
        ))}
      </div>

      <div className="Eee__sub-heading">
        <p className='Eee__sub-heading-p'>Third Year Student</p>
      </div>

      <div className="Eee__teams-card-container">
        {teamThird.map((teamThird, index) => (
          <div key={index} onClick={() => openModal(teamThird)}>
            <Team_card
              image={teamThird.image}
              name={teamThird.name}
              designation={teamThird.designation}
              designation_img={teamThird.designation_img}
            />
          </div>
        ))}
      </div>

      <div className="Eee__sub-heading">
        <p className='Eee__sub-heading-p'>Second Year Student</p>
      </div>

      <div className="Eee__teams-card-container">
        {teamSecond.map((teamSecond, index) => (
          <div key={index} onClick={() => openModal(teamSecond)}>
            <Team_card
              image={teamSecond.image}
              name={teamSecond.name}
              designation={teamSecond.designation}
              designation_img={teamSecond.designation_img}
            />
          </div>
        ))}
      </div>

      {isModalOpen && selectedTeamMember && (
        <Modal
          heading={selectedTeamMember.name}
          pic={selectedTeamMember.image}
          content_1={selectedTeamMember.designation}
          content_2=""
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default Teams;