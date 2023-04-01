import './Carousel.css'
import React, { useState } from 'react';

import img1 from  './../images/img010.jpeg'
import img2 from  './../images/img013.jpeg'
import img3 from  './../images/img016.jpeg'
import img4 from  './../images/img007.jpeg'





function Carousel() {    

  const imgs = [img1,img2 ,img3 ,img4];

  const [array, setArray] = useState([0,1, 2, 3]);

  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  shuffleArray(array);

  return (
      <div className="outer">
            <div className='flex-container' id="flex-container">
              <div className='card'>
              <img 
                className='card_img'
                src={imgs[array[0]]}
                />

              </div>
              <div className='card'>
              <img 
                className='card_img'
                src={imgs[array[1]]}
                />

              </div>
              <div className='card'>
              <img 
                className='card_img'
                src={imgs[array[2]]}/>

              </div>
              <div className='card'>
              <img 
                className='card_img'
                src={imgs[array[3]]}/>

              </div>
            </div>
      </div>
    );
  }
  
  export default Carousel;
  
