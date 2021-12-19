import './Card.css';
import Button from './components/Button'

function Card (props){

     const {word, meaning, transcription, translation, theme} =props;
     
    return(
        <div>
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
            <Button text="I know"></Button>
            <Button text="I dont't know" ></Button>
            <Button text="Skipp"></Button>
        </div>

        </div>
    )
}

export default Card;