import './Header.css'
import { useNavigate } from "react-router-dom";
import logo from './../images/logoemptylens.png';
import Ct from './../assets/Ct/txt.json';



function Header() {
    let navigate = useNavigate(); 
  return (
    <nav className='header'>
      <div className='header-container'>
        <div className='btns_cont'>
          <button className='head_btnb' onClick={() =>navigate("/")}>Home</button>
          <button className='head_btnb' onClick={() =>navigate("/solutions")}>Solutions</button>
          <button className='head_btnb' onClick={() =>navigate("/services")}>Services</button>
          <button className='head_btnb' onClick={() =>navigate("/contact")}>Contact</button>
        </div>
        <div className='Logo_cont' onClick={() =>navigate("/")}>
          <img
            src={logo}
            width={240}
            height={166}
          />
        </div>
        <div className='quote'>
          {Ct.intro}
          </div>            
      </div>
    </nav>
  );
}

export default Header;
