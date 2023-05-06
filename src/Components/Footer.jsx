import './Footer.css'
import { useNavigate } from "react-router-dom";

function Footer() {
  let navigate = useNavigate(); 


  function Title(props) {
    return (
        <ul className='foot_btna' onClick={() =>navigate("/" + props.t_lk)} >
        {"" + props.t_name +""}
        </ul> 
    )
  }
  

  function Subtitle(props) {
    if (props.id == 0)
    return (
      <ul className='foot_btnb' href={""+props.t_lk+""} target="_blank" >{"" + props.t_name +""}</ul>
    )
    if (props.id == 1)
    return (
      <ul className='foot_btnb' onClick={() =>navigate("/" + props.t_lk)} >
      {"" + props.t_name +""}
      </ul> 
    )
  }

  return (
    <nav className='footer'>
      <div className='footer-container'>

        <div className='btn_cont'>
          
          <Title t_name={"Home"} t_lk={""} />
        </div>

        <div className='btn_cont'>
          <Title t_name={"Solutions"} t_lk={"solutions"} />
        </div>

        <div className='btn_cont'>
          <Title t_name={"Services"} t_lk={"services"} />
          <Subtitle t_name={"AR"} t_lk={"services"}id={1}/>
          <Subtitle t_name={"VR"} t_lk={"services"}id={1}/>
        </div>

        <div className='btn_cont'>
          <Title t_name={"Contact"} t_lk={"contact"} />
          <Subtitle t_name={"LinkedIn"} t_lk={"https://www.linkedin.com/company/calgy/"} id={0}/>
        </div> 

      </div>
    </nav>
      
  );
}

export default Footer;
