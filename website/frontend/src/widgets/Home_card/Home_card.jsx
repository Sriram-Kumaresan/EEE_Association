import React from 'react'
import './Home_card.css'

const Home_card = ({img,link,text}) => {
  return (
    <div className='home_card_shell'>
        <a className='home_card_link' href={link}>
        <div className='home_card_img_holder'>
            <img className='home_card_img' src={img} alt='Card image'/>
        </div>
        <div className='home_card_text'>{text}</div>
        </a>
    </div>
  )
}

export default Home_card