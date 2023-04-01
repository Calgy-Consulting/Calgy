import './Block.css'
import React from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import useWindowDimensions from './param/window';

const Block = props => {
  let navigate = useNavigate(); 
  
  const { height, width } = useWindowDimensions();
  
  if (props.id%2 != 0)
  {
    return (
      <div className='Box'>
          <div className='Img_Box'>
           <img className='img_cls'
            onClick={() =>navigate(props.url)}
            src={props.img}
            width={width/3.3}
            height={width/4.4}/>
          </div>
          <div className='Line'> 
          <hr/>
          </div>
          <div className='Info_Box'>
            <h1 className='Info_Title'><i>{props.title}</i></h1>
            <h3 className='Info_Text'> {props.text}</h3>
          </div>
      </div>
  );
  }else{
    return (
      <div className='Box'>
          <div className='Info_Box'>
            <h1 className='Info_Title'><i>{props.title}</i></h1>
            <h3 className='Info_Text'> {props.text}</h3>
          </div>
          <div className='Line'> 
            <hr/>
          </div>
          <div className='Img_Box'>
           <img className='img_cls'
            onClick={() =>navigate(props.url)}
            src={props.img}
            width={width/3.3}
            height={width/4.4}/>
          </div>
          
      </div>
  );
  }
    
};

export default Block;
