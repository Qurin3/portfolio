import './navbar.scss';

export const Navbar = () => {
  return (
    <div className='navbar'>Navbar
       
       <div className="wrapper">
        <span>Filip Kłusek</span>
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