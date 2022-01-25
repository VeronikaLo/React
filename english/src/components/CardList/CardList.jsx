import React, {useState} from 'react';
import './CardList.css';
import Card from '../Card/Card';
import {wordList} from '../dataList.js';




function CardList (){
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const onNext = ()=>{
        setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1);
    }
    const onBack = ()=>{
        setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1);
    }

    const[checkedWords, setCheckedWords] = useState(0);

    const addCheckedWords = () =>{
        setCheckedWords(prevCheckedWords => prevCheckedWords + 1);
    }


   return(
        <>
        <div className="cardListWrapper">
            {currentIndex > 0 && <button className='btn_cardList' onClick={onBack}>{"<"}</button>}

            <Card {...wordList[currentIndex]} addCheckedWords = {addCheckedWords} />

            {currentIndex < wordList.length-1 && <button className='btn_cardList' onClick={onNext}>{">"}</button>}
        </div>

        <div className='info'>
        {currentIndex + 1} / {wordList.length}
            </div>

        <div className='info'>
        {checkedWords>0 && <h4>You have checked {checkedWords} words</h4>}    
        
        </div>

        </>
        )
    
}

export default CardList;