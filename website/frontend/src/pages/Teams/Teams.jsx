import React from 'react'
import './Teams.css';
import {Team_card} from "../../widgets"
import heading from '../../asset/team.svg';
import bg from '../../asset/teamBg.webp';
import boy from '../../asset/Subtract.png';

const Teams = () => {
  return (
    <div className='Eee__teams-main'>
        <div className="Eee__teams-heading">
            <img src={heading} alt="Team" />
        </div>

            <div className="Eee__teams-hd-holder">
            <Team_card
            image={boy}
            name="Solai Dhanush"
            dest="General Secretary"
            />
            </div>
       


      
    </div>
  )
}

export default Teams
