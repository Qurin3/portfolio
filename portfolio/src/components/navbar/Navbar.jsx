import './navbar.scss';
import {motion} from "framer-motion";
import Sidebar from './sidebar/Sidebar';
export const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />

       <div className="wrapper">
        <motion.span
         initial={{opacity:0, scale: 0.5}}
         animate={{opacity:1, scale: 1}}
         transition={{duration: 0.5}}
         >
          Filip Kłusek</motion.span>
        <div className="social">
            <a href="https://www.linkedin.com/in/filip-kłusek-510725259/">
                <img src="/linkedin.png" alt="linkedin-image"/>
            </a>
            <a href="https://github.com/Qurin3">
                <img src="/github.png" alt="github-image"/>
            </a>
        </div>
       </div>
    
    </div>
  )
}
export default Navbar;