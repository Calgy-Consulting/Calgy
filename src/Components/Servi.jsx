import React from 'react';
import { useRef } from 'react';

const Servi = props => {

  
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  
  return (
      <div className='Service'>
        <img className='Servi_Img'
            src={props.img}
            width={windowSize.current[0]}
            height={800}/>
      
         
      </div>
  );
};

export default Servi;
