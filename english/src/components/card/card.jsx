import React, {useState} from 'react';
import './Card.css';
import Button from '../Button/Button';


function Card (props){

     const {word, transcription, translation, theme} =props;

     const [isPressed, setPressed] = useState(false);
    
    const handleChange = () => {
        setPressed(!isPressed);
    };
     
    return(
        <div className="cardWrapper">
        <div className="card">
            <div className="card__header"></div>
            <div className="card__body">
                <h2>{word}Apple</h2>
                <p>|ˈæp(ə)l| </p>
                {isPressed? <p className='translation' >яблоко</p> :
                 <button className='card-btn' onClick={handleChange} >Check</button>} 
                

            </div>
            <div className="card__footer"></div>
            
        </div>

        <div className="buttons">
            <Button text="I know" color="green"></Button>
            <Button text="I don't know" color="red" ></Button>
            <Button text="Skipp" color="blue"></Button>
        </div>

        </div>
    )
}

export default Card;