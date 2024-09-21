import React, { useEffect, useState } from "react";
import "./Home.css";

import logo from "../../asset/alconesy_nav_logo.png";
import Home_card from "../../widgets/Home_card/Home_card";

import home_card_img_1 from '../../asset/home_card-1.png'
import home_card_img_2 from '../../asset/home_card-2.png'
import home_card_img_3 from '../../asset/home_card-3.png'
import home_bottom_pic from '../../asset/home_bottom_pic.png'

const Home = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    var countDownDate = new Date("Oct 22, 2024 00:00:00").getTime();

    var x = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (distance < 0) {
        clearInterval(x);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
  }, []);

  return (
    <>
    <div className="home_top_order_container">
      <div className="home_top_holder">
        <a href="/" className="home_logo_holder">
          <img src={logo} className="home_logo_img" />
        </a>

        <a href="/login" className="home_top_login_holder">
          <div className="home_top_login_text">LOGIN</div>
        </a>
      </div>

      <div className="home_hero_sec_container">
        <div className="home_hero_sec_clg_name">ACGCET's</div>
        <div className="home_hero_sec_sup_title">26 TH EDITION</div>
        <div className="home_hero_sec_heading">ALCONESY'24</div>
        <div className="home_hero_sec_date">OCT 22 & 23</div>

        <div className="home_counter_sec_container">

          <div className="slot_holder_1">
          <div className="home_counter_slot_holder">
            <div className="home_counter_number_slot">
              <div className="home_counter_number">{days}</div>
            </div>
            <div className="home_counter_text">DAYS</div>
          </div>

          <div className="home_counter_slot_holder">
            <div className="home_counter_number_slot">
              <div className="home_counter_number">{hours}</div>
            </div>
            <div className="home_counter_text">HOURS</div>
          </div>
          </div>

          <div className="slot_holder_2">
          <div className="home_counter_slot_holder">
            <div className="home_counter_number_slot">
              <div className="home_counter_number">{minutes}</div>
            </div>
            <div className="home_counter_text">MINUTES</div>
          </div>

          <div className="home_counter_slot_holder">
            <div className="home_counter_number_slot">
              <div className="home_counter_number">{seconds}</div>
            </div>
            <div className="home_counter_text">SECONDS</div>
          </div>
          </div>
        </div>

        <div className="home_hero_quote">EVERYTHING IS ABOUT TO CHANGE</div>
      </div>
    </div>

    <div className="about_whole_single_container">
      <div className="about_sec_holder about_extra_margin">
        <div className="about_sec_heading">ABOUT US</div>
        <div className="about_sec_text">
        The Electrical and Electronics Engineering (EEE) department at ACGCET offers B.E. and M.E. programs, emphasizing power systems, electronics, andcontrol engineering. It has a well-structured curriculum aligned with industry needs, covering topics like electrical machines, power electronics, and renewable energy. The department provides state-of-the-art labs for hands-on learning and research. Faculty members are experienced, with a strong focus on academic and practical training. The EEE department regularly organizes workshops, seminars, and industry interactions to enhance student skills and employability. It maintains strong industry ties for internships and placements.
        </div>
      </div>

      <div className="card_sec_holder">
        <div className="about_sec_heading">ALCONESY</div>
        <div className="cards_holder">
          <Home_card img={home_card_img_1} link="/events" text="EVENTS"/>
          <Home_card img={home_card_img_2} link="/workshop" text="WORKSHOP"/>
          <Home_card img={home_card_img_3} link="/accomodation" text="ACCOMODATION"/>
        </div>
      </div>

      <div className="home_bottom_pic_holder">
        <img src={home_bottom_pic} className="home_bottom_pic"/>
      </div>
    </div>

    </>
  );
};

export default Home;
