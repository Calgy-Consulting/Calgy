import './Solution.css'
import Footer from './../Components/Footer';
import Header from './../Components/Header';

function Solution() {
  

  return (
   
    <div className='Solution-container'>
      <Header/>
        <div className='test1'>
          <div className='text-cont'>
            <div className='text'>
              Ideation
            </div>
          </div>
        </div>
        <div className='test2'>
          <div className='text-cont'>
            <div className='text'>
              Development
            </div>
          </div>
        </div>
        <div className='test3'>
          <div className='text-cont'>
            <div className='text'>
              Support
            </div>
          </div>
        </div>
        <div className='test4'>
          <div className='text-cont'>
            <div className='text'>
            Training
            </div>
          </div>
        </div>
        <Footer/>
    </div>
      
  );
}

export default Solution;