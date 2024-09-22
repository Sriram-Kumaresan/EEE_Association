import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact_bg'>
      <div className='contact_heading'>C O N T A C T</div>
      <div className='contact_icons'>
      <a href="https://www.instagram.com/alconesy_acgcet/" target="_blank" rel="noopener noreferrer">
        <img src={require('../../asset/contact_insta.png')} alt="Instagram" className='fac-img' />
        </a>
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <img src={require('../../asset/contact_mail.png')} alt="Mail" className='mail-img' />
        </a>
        <a href="https://www.linkedin.com/company/eee-association-of-acgcet/" target="_blank" rel="noopener noreferrer">
          <img src={require('../../asset/contact_linkedin.png')} alt="LinkedIn" className='lin-img' />
        </a>
      </div>

      <div className='contact_bot_img'>
        <img src={require('../../asset/contact_bot.png')} alt="Extra" className='cbot_img' />
      </div>

      <div className='contact_small_paras_div'>
        <div className='contact_div_heading'>GENERAL INQUERIES</div>
        <div className='contact_paras'>
          <div className='p1'>
            <p>manisankar s </p>
            <p>general secretary</p>
            <p>9344131714</p>
           
          </div>
          <div className='p1'>
          <p>kaviya m </p>
            <p>joint secretary</p>
            <p>9363637900</p>
          </div>
          <div className='p1'>
          <p>hitaesh kanna s </p>
            <p>account secretary</p>
            <p>9443164697</p>
          </div>
          <div className='p1'>
          <p>darshi r shah </p>
            <p>account secretary</p>
            <p>6381704841</p>
          </div>
          <div className='p1'>
          <p>vivekanandhan s </p>
            <p>event secretary</p>
            <p>9791496021</p>
           
          </div>
          <div className='p1'>
          <p>victoria p </p>
            <p>event secretary</p>
            <p>6380333820</p>
           
          </div>
          <div className='p1'>
          <p>ramesh m</p>
            <p>website secretary</p>
            <p>6369870576</p>
           
          </div>
          <div className='p1'>
          <p>vaishnavi k </p>
            <p>website secretary</p>
            <p>6374663623</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
