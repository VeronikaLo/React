import './Card.css';

function Card(props) {

    const {tarif, price, volume, extra, isSelected} = props;
    
    


    return(
        
        <div className={"card " + (isSelected&& "selected")}>
         <p className="card-title">{ tarif }</p>
         <p className="card-price"><span>руб</span> { price } <span>/мес</span></p>
         <p className="card-volume">До { volume } Мбит/сек</p>
         <p className="card-extra">{ extra }</p>
         
        
        </div>

    
    );
}

export default Card;