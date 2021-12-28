import './Card.css';
import React, {useState} from 'react';

function Card(props) {

    const {tarif, price, volume, extra, } = props;
    const [isSelected, setSelected] = useState(false);
    
    const handleChange = () => {
        setSelected(!isSelected);
    };

    return(
        
        <div className={"card " + (isSelected&& "selected")} onClick={handleChange}>
         <p className="card-title">{ tarif }</p>
         <p className="card-price"><span>руб</span> { price } <span>/мес</span></p>
         <p className="card-volume">До { volume } Мбит/сек</p>
         <p className="card-extra">{ extra }</p>
         
        
        </div>

    
    );
}

export default Card;