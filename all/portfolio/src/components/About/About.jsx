import React from 'react';
import './about.scss';
import ImageLoli from '../../../public/loli.png';

const About = () => {
  return (
    <>
      <div className='wrap'>
        <div className="imageCon">
          <img src={ImageLoli} alt="lolipop" className="loliImage" />
        </div>
        <div className="text">
          <h1>About me</h1>
          <p>
            I am an enthusiastic front-end developer with a passion for creating compelling web experiences. Proficient in React, Next.js, Tailwind CSS, and TypeScript, I combine creativity with technology to bring ideas to life. Currently studying Computer Science, I am also interested in backend development. With previous corporate experience, I bring technical skills and professionalism to my work. Let's create something extraordinary!
          </p>
          <button className='button1'>Check out my CV!</button>
        </div>
      </div>
    </>
  );
}

export default About;
