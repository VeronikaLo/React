import './Card.css';

function Card (props){

     const {word, meaning, transcription, translation, theme} =props;
     
    return(
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
    )
}

export default Card;