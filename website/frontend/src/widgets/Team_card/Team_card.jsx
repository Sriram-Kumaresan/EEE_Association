import React from 'react'
import './Team_card.css'





const Team_card = ({image,name,designation,designation_img}) => {
  return (
    <div>
        <div className="team__card-main">
          <div className="team__card-holder">
            <div className="team__card-img-holder">
            <img className='team__card-img'src={image} alt="Team member" />
            </div>

            <div className="tc-tot-img-txt">
            <div className="team__card-dest-holder">
              <img className='tm__dest-img'src={designation_img}  alt="Designation img" />
            </div>
            <div className="tc-name-dest-holder">
            <p className='team__card-name'> {name}</p>
            <p className='team__card-dest'>{designation}</p>
            </div>
            
            </div>
          </div>

               

            </div>
        </div>
      
  )
}

export default Team_card