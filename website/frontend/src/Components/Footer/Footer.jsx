import React from 'react'
import './Footer.css'

import instaicon from '../../asset/footer_insta_icon.png'
import linkedinicon from '../../asset/footer_linkedin_icon.png'

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className='footer_follow_sec_holder'>
        <div className='footer_follow_sec_head'>FOLLOW US</div>
        <div className='footer_follow_sec_icons_hold'>
          <a href="/" className='footer_follow_sec_icon_wrap'><img src={instaicon} className='footer_follow_sec_icon'/></a>
          <a href="/" className='footer_follow_sec_icon_wrap'><img src={linkedinicon} className='footer_follow_sec_icon'/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer