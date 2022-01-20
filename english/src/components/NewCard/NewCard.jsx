import './NewCard.css';
//import react from 'react';
import Button from '../Button/Button';



function NewCard (props){

   return(
       <div className="cardWrapper">
       <div className="card">
           <div className="card__header"></div>
           <div className="card__body">
               <input className='new-input' placeholder='Your word...'></input>
               <input className='new-input' placeholder='Transcription...'></input>
               <input className='new-input' placeholder='Translation...'></input>
               <input className='new-input' placeholder='Category...'></input>

           </div>
           <div className="card__footer"></div>
           
       </div>

       <div className="buttons">
           <Button text="Add" color="blue"></Button>
           
           
   </div>

       </div>
   )
}

export default NewCard;