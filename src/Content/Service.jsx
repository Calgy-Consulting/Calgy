import './Service.css'
import Footer from './../Components/Footer';
import Header from './../Components/Header';
import Frame from './../Components/Frame';
import Ct from './../assets/Ct/txt.json';

function Service() {
  

  return (

    <div className='Service-container'>
      <Header/>
        <Frame text='AR' data={Ct.Services.AR} />
        <Frame text='VR' data={Ct.Services.VR} />              
      <Footer/>
    </div>
      
  );
}

export default Service;