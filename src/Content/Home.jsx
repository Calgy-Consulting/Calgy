import './Home.css'
import pic1 from './../images/img013.jpeg'
import pic2 from './../images/img001.1.png'
import pic3 from './../images/img007.jpeg'
import Ct from './../assets/Ct/txt.json'


import Footer from './../Components/Footer';
import Header from './../Components/Header';
import Block from './../Components/Block';

function Home() {
  

  return (
    
    <div className='Home-container'>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <Header/>

        <br/>
        <div className='Categories'>
        <Block
          id={0}
          img={pic1}
          url="/solutions"
          title="What is XR?"
          text={Ct.Home.textI}
          />
        <Block
          id={1}
          img={pic2}
          url={"/services"}
          title="Who are we ?"
          text={Ct.Home.textII}
          />
          <Block
          id={2}
          img={pic3}
          url={"/services"}
          title="What do we do ?"
          text={Ct.Home.textIII}
          />

        </div>
      
      <Footer/>
    </div>
      
  );
}

export default Home;