import './Home.css'
import pic1 from './../images/img013.jpeg'
import pic2 from './../images/img007.jpeg'
import pic3 from './../images/img001.png'


import Footer from './../Components/Footer';
import Header from './../Components/Header';
import Block from './../Components/Block';
import FrontPage from './../Components/FrontPage';

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
          text="   XR stands for Extended Reality. It is a futuristic field that has limitless potential for various industries, providing innovative solutions for businesses. XR offers a unique combination of digital and physical experiences, creating a new level of immersion or even more efficient work environments that was previously impossible. This makes it an extremely versatile tool for numerous purposes from training, visual guidance, to AI integration. Overall, XR is a wide range of new technologies and limitless solutions, making it a key player in many industrial and work processes."
          />
        <Block
          id={1}
          img={pic2}
          url={"/services"}
          title="What do we do?"
          text="la"
          />
          <Block
          id={2}
          img={pic3}
          url={"/services"}
          title="Who are we?"
          text="la"
          />

        </div>
      
      <Footer/>
    </div>
      
  );
}

export default Home;