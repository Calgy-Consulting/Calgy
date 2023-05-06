import './Frame.css';
import Box from './Box';

function Frame(props){

    return (
        //Création de la carte par défaut avec un lien vers une route, une catégorie, une image et du texte
        
          <li className='frame-item'>
            <div className='frame-box'> 
            {props.text}
            </div>
            <div className='obj-cont'>
              <Box >

              </Box>
            </div>
        </li>
        );

}
export default Frame;