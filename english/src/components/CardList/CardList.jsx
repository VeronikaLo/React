import React, {useState} from 'react';
import './CardList.css';
import Card from '../Card/Card';
import {wordList} from '../dataList.js';




function CardList (){
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const onNext = ()=>{
        setCurrentIndex(currentIndex + 1);
    }
    const onBack = ()=>{
        setCurrentIndex(currentIndex - 1);
    }

   return(
       <div className="cardListWrapper">
            <button className='btn_cardList' onClick={onBack}>{"<"}</button>
            <Card {...wordList[currentIndex]}/>
            <button className='btn_cardList' onClick={onNext}>{">"}</button>
       </div>
   )
}

export default CardList;