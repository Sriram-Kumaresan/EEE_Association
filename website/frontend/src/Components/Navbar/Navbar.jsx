import React, { useEffect, useState } from 'react'

import './Navbar.css'

import menu1 from '../../asset/menuIcon-1.png';
import menu2 from '../../asset/menuIcon-2.png';
import menu3 from '../../asset/menuIcon-3.png';
import menu4 from '../../asset/menuIcon-4.png';
import menu5 from '../../asset/menuIcon-5.png';
import menu6 from '../../asset/menuIcon-6.png';
import menu7 from '../../asset/menuIcon-7.png';
import menu8 from '../../asset/menuIcon-8.png';

import arrow_right from  '../../asset/nav-arrow-right.png';
import arrow_left from  '../../asset/nav-arrow-left.png';


const Navbar = () => {

  const [windowpath,setWindowpath]=useState('/')
  const [navopen, setNavopen]=useState(true)
  const [firstflag, setFirstflag]=useState(0)

  useEffect(()=>{
    setWindowpath(window.location.pathname)
  },[])

  const navbarToggler=()=>{
    if(firstflag===0){
      setFirstflag(1)
    }
    setNavopen(!navopen)
  }

  return (
    <>
    {navopen&&(<div className='navbar_open_holder' onClick={navbarToggler}>
      <img src={arrow_right} alt='opening icon' className='navbar_open_img'/>
    </div>)}

    <div className={`navbar_container ${navopen?'':'nav_opening'} ${firstflag===0?'nav_first_closed':''} ${(navopen&&firstflag===1)?'nav_closing':''}`}>
      <div className='navbar_title_holder'>
        <div className='navbar_title'>M E N U</div>

        <div className='navbar_close_holder' onClick={navbarToggler}>
          <img src={arrow_left} alt='closing icon' className='navbar_close_img'/>
        </div>

        <div className='navbar_menu_container'>
          
          <a href='/' className={`navbar_menu_holder ${windowpath==='/'?'selected_menu':''}`}>
            <div className='navbar_menu_img_cont'>
              <img src={menu1} alt='Home Icon' className='navbar_menu_img'/>
            </div>
            <div className='navbar_menu_text'>HOME</div>
          </a>

          <a href='/events' className={`navbar_menu_holder ${windowpath==='/events'?'selected_menu':''}`}>
            <div className='navbar_menu_img_cont'>
              <img src={menu6} alt='Events Icon' className='navbar_menu_img'/>
            </div>
            <div className='navbar_menu_text'>EVENTS</div>
          </a>

          <a href='/workshop' className={`navbar_menu_holder ${windowpath==='/workshop'?'selected_menu':''}`}>
            <div className='navbar_menu_img_cont'>
              <img src={menu8} alt='Workshop Icon' className='navbar_menu_img'/>
            </div>
            <div className='navbar_menu_text'>WORKSHOP</div>
          </a>

          <a href='/login' className={`navbar_menu_holder ${windowpath==='/login'?'selected_menu':''}`}>
            <div className='navbar_menu_img_cont'>
              <img src={menu2} alt='Login Icon' className='navbar_menu_img'/>
            </div>
            <div className='navbar_menu_text'>LOGIN</div>
          </a>

          <a href='/payment' className={`navbar_menu_holder ${windowpath==='/payment'?'selected_menu':''}`}>
            <div className='navbar_menu_img_cont'>
              <img src={menu3} alt='Payment Icon' className='navbar_menu_img'/>
            </div>
            <div className='navbar_menu_text'>PAYMENT</div>
          </a>

          <a href='/contact' className={`navbar_menu_holder ${windowpath==='/contact'?'selected_menu':''}`}>
            <div className='navbar_menu_img_cont'>
              <img src={menu4} alt='contact Icon' className='navbar_menu_img'/>
            </div>
            <div className='navbar_menu_text'>CONTACT</div>
          </a>

          <a href='/accomodation' className={`navbar_menu_holder ${windowpath==='/accomodation'?'selected_menu':''}`}>
            <div className='navbar_menu_img_cont'>
              <img src={menu7} alt='Accomodation Icon' className='navbar_menu_img'/>
            </div>
            <div className='navbar_menu_text'>ACCOMMODATION</div>
          </a>

          <a href='/team' className={`navbar_menu_holder ${windowpath==='/team'?'selected_menu':''}`}>
            <div className='navbar_menu_img_cont'>
              <img src={menu5} alt='Team Icon' className='navbar_menu_img'/>
            </div>
            <div className='navbar_menu_text'>TEAM</div>
          </a>

        </div>

      </div>
    </div>
    </>
  )
}

export default Navbar