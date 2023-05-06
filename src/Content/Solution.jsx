import './Solution.css'
import Footer from './../Components/Footer';
import Header from './../Components/Header';
import Ct from './../assets/Ct/txt.json';

function Solution() {
  

  return (
   
    <div className='Solution-container'>
      <Header/>
     
      { /*<div className='intro'> {Ct.Solutions.intro}
      </div>*/}
      
        <div className='test1'>
          <div className='text-cont'>
            <div className='text1'>
              Ideation
              </div>
              <div className='text11' >
              {Ct.Solutions.Ideation}
              
              
            </div>
            
          </div>
        </div>
        
        <div className='test2'>
          <div className='text-cont'>
            <div className='text2'>
              Development
            </div>
            <div className='text21' >
            {Ct.Solutions.Development}
            
            </div>
          </div>
        </div>
        <div className='test4'>
          <div className='text-cont'>
            <div className='text1'>
            Training
            </div>
            <div className='text11' >
            {Ct.Solutions.Training}
            
            </div>
          </div>
        </div>
        <div className='test3'>
          <div className='text-cont'>
            <div className='text2'>
              Support
            </div>
            <div className='text21'>
            {Ct.Solutions.Support}
            
            </div>
          </div>
        </div>
        
      
        <Footer/>
    </div>
      
  );
}

export default Solution;