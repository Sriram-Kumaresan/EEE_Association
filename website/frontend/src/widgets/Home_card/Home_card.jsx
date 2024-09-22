import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Home_card.css';

const Home_card = ({ img, link, text, parallaxOffset = 150 }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { scrollY } = useViewportScroll();

  // Apply stronger parallax effect and rotation
  const y = useTransform(scrollY, [0, 1200], [0, -parallaxOffset]);
  const rotateY = useTransform(scrollY, [0, 1200], [-20, 20]);
  const rotateX = useTransform(scrollY, [0, 1200], [20, -20]);
  const scale = useTransform(scrollY, [0, 1200], [1, 1.1]); 

  return (
    <motion.div
      ref={ref}
      className='home_card_shell'
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 50 }} 
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      // style={inView ? { y, rotateX, rotateY, scale } : {}} 
      whileHover={{ scale: 1.1, rotate: 5 }} 
    >
      <a className='home_card_link' href={link}>
        <div className='home_card_img_holder'>
          <img className='home_card_img' src={img} alt='Card image' />
        </div>
        <div className='home_card_text'>{text}</div>
      </a>
    </motion.div>
  );
};

export default Home_card;
