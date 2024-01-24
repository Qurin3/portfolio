import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import Blob from './Blob'
import Image from "../../../public/profile2.png"
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
        duration: 2,
        repeat: Infinity
    }
  },
};
const Hero = () => {
  return (
    
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}> 👋🏼FILIP KŁUSEK</motion.h2>
          <motion.h1 variants={textVariants}>Front-End Developer </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} >
              Scroll down to see the Latest work or Contact me :D
            </motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        <motion.div className="imageContainer" variants={textVariants}>
         {/*   <Blob />   */} 
         <motion.img src={Image} alt="profile" variants={textVariants} initial="initial"
          animate="animate"/>
        </motion.div>
        
      </div>
      <div className="slidingTextContainer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fill-opacity="1" d="M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,181.3C672,171,768,181,864,202.7C960,224,1056,256,1152,234.7C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      
    </div>
  );
};

export default Hero;
