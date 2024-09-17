import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact_bg'>
      <div className='contact_heading'>C O N T A C T</div>
      <div className='contact_icons'>
        <img src={require('../../asset/contact_insta.png')} alt="Instagram" className='fac-img' />
        <img src={require('../../asset/contact_mail.png')} alt="Mail" className='mail-img' />
        <img src={require('../../asset/contact_linkedin.png')} alt="LinkedIn" className='lin-img' />
      </div>

      <div className='contact_bot_img'>
        <img src={require('../../asset/contact_bot.png')} alt="Extra" className='cbot_img' />
      </div>

      <div className='contact_small_paras_div'>
        <div className='contact_div_heading'>GENERAL INQUERIES</div>
        <div className='contact_paras'>
          <div className='p1'>
            <p>Solai Dhanush </p>
            <p>general secretary</p>
            <p>2342323423</p>
           
          </div>
          <div className='p1'>
          <p>Solai Dhanush </p>
            <p>general secretary</p>
            <p>2342323423</p>
          </div>
          <div className='p1'>
          <p>Solai Dhanush </p>
            <p>general secretary</p>
            <p>2342323423</p>
          </div>
          <div className='p1'>
          <p>Solai Dhanush </p>
            <p>general secretary</p>
            <p>2342323423</p>
          </div>
          <div className='p1'>
          <p>Solai Dhanush </p>
            <p>general secretary</p>
            <p>2342323423</p>
           
          </div>
          <div className='p1'>
          <p>Solai Dhanush </p>
            <p>general secretary</p>
            <p>2342323423</p>
           
          </div>
          <div className='p1'>
          <p>Solai Dhanush </p>
            <p>general secretary</p>
            <p>2342323423</p>
           
          </div>
          <div className='p1'>
          <p>Solai Dhanush </p>
            <p>general secretary</p>
            <p>2342323423</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
