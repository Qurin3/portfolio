import React from "react";
import "./services.scss";
const Services = () => {
  return (
    
    <div className="services">
      <div className="wrapper"> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e7008a" fill-opacity="1" d="M0,288L48,256C96,224,192,160,288,165.3C384,171,480,245,576,261.3C672,277,768,235,864,218.7C960,203,1056,213,1152,234.7C1248,256,1344,288,1392,304L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="content">
          <div className="Iuse">
            <h1>Technologies I am confident with:</h1>
            <ul>
              <li className="icon"><img src="../../../public/ikony/typescript-16.svg" alt="typescript-16"/></li>
              <li className="icon"><img src="../../../public/ikony/next-16.svg" alt="next-16"/></li>
              <li className="icon"><img src="../../../public/ikony/react.svg" alt="react"/></li>
              <li className="icon"><img src="../../../public/ikony/tailwind-css.svg" alt="tailwind-css"/></li>
              <li className="icon"><img src="../../../public/ikony/sass.svg" alt="sass"/></li>
              <li className="icon"><img src="../../../public/ikony/framer.svg" alt="framer"/></li>
            </ul>
          </div>

          <div className="WantUse">
            <h2>Technologies that I am still learning</h2>
            <li className="icon"><img src="../../../public/ikony2/dotnet.svg" alt=".NET"/></li>
              <li className="icon"><img src="../../../public/ikony2/express.svg" alt="Express"/></li>
              <li className="icon"><img src="../../../public/ikony2/mongodb.svg" alt="MongoDB"/></li>
              <li className="icon"><img src="../../../public/ikony2/node-16.svg" alt="Node"/> </li>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Services;
