import './FrontPage.css'
import img from './../images/img0000.png'

import { Link, useNavigate} from "react-router-dom";
import useWindowDimensions from './param/window';
import Background from './Background';

const FrontPage = () => {

    let navigate = useNavigate(); 
    const { height, width } = useWindowDimensions();

    return (
        <div className='FrontPage'> 
         <Background/>
            <div className='btns_cont'>
                <button className='head_btn' onClick={() => navigate("/")}>Home</button>
                <button className='head_btn' onClick={() => navigate("/solutions")}>Solutions</button>
                <button className='head_btn' onClick={() => navigate("/services")}>Services</button>
                <button className='head_btn' onClick={() => navigate("/contact")}>Contact</button>
            </div>
            <div className='Text_box'>
            la
            </div>
           
            {/*
            <div className='Img_Cont'>
                <img className='Img'
                                src={img}
                                height={width/1.2}
                                width={width/2}
                                />
            </div>
            */}

            
        </div>

    );
}

export default FrontPage;