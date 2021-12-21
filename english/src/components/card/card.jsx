import './Card.css';
import Button from '../Button/Button';

function Card (props){

     const {word, meaning, transcription, translation, theme} =props;
     
    return(
        <div className="cardWrapper">
        <div className="card">
            <div className="card__header"></div>
            <div className="card__body">
                <h2>WORD</h2>
                <p>meaning</p>
                <p>transcription</p>
                <p>translation</p>
                <p>theme</p>

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