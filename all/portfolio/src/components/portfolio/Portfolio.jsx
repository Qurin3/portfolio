import React from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import King from "../../../public/King.jpg"
  const items = [
    {
      id: 1,
      title: "NextJS Car rental",
      img: "../../..public/rental1.jpg",
      desc: "For this project I used TypeScript, Next and Tailwind. My goal was to learn how to use the API, so I used Cars by API Ninjas."
    },
    {
      id: 2,
      title: "KingoPedia",
      img: "../../..public/King.jpg",
      desc: "I noticed that there is no good API on the web that contains all the works of Stephen King. Being a big fan, I couldn't let this pass and decided to create my own API and a page to browse the books of the master of horror. The application is still in production, but it will appear here soon :)",
    },
  ];
  const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
      target: ref,
    });
    const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    return( 
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img}/>
          </div>
        <motion.div className="textContainer" style={{y}}> 
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
        </div>
      </div>
    </section>
    );
  };

  
  const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
      target: ref,
    });
    const scaleX = useSpring(scrollYProgress,{
      stiffness: 50,
      damping: 30,
    })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
