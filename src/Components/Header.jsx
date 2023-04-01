import './Header.css'
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from './../images/img000.png';

import Carousel from './Carousel';


function Header() {
    let navigate = useNavigate(); 
  return (
    <nav className='header'>
      <div className='header-container'>
        <Carousel/>
        <div className='btns_cont'>
          <button className='head_btnb' onClick={() =>navigate("/")}>Home</button>
          <button className='head_btnb' onClick={() =>navigate("/solutions")}>Solutions</button>
          <button className='head_btnb' onClick={() =>navigate("/services")}>Services</button>
          <button className='head_btnb' onClick={() =>navigate("/contact")}>Contact</button>
        </div>
        <div className='Logo_cont' onClick={() =>navigate("/")}>
          <img
            src={logo}
            width={315}
            height={90}
          />
        </div>            
      </div>
    </nav>
  );
}

export default Header;
