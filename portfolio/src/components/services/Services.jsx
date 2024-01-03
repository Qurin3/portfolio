import React from "react";
import "./services.scss";
import { motion,useInView } from "framer-motion";
import { useRef } from "react";
const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
};
const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref,{margin:"-100px"})
  return (
    
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={isInView && 'animate'}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          I am searching for a first internship
          <br /> to rocket my knowledge!
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="people" />
            <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
        </div>
        <div className="title">
            <h1><motion.b whileHover={{color:"orange"}}>For your</motion.b> Business</h1>
            <button>What we do?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
            <motion.div className="box-idea" whileHover={{background: "lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box-idea" whileHover={{background: "lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <button>GO</button>
            </motion.div>
            <motion.div className="box-idea" whileHover={{background: "lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <button>GO</button>
            </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
