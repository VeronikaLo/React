import './Hero.css';



function Hero(props) {

    const {heroName, universe, alterEgo, activity, friends, superPower, src} = props;

    return(
        <div className="card">
         <div className="card__title">{ heroName }</div>
         <div className="card-item"><span>Вселенная: </span>{ universe }</div>
         <div className="card-item"><span>Альтер эго: </span>{ alterEgo }</div>
         <div className="card-item"><span>Род деятельности: </span>{ activity }</div>
         <div className="card-item"><span>Друзья: </span>{ friends }</div>
         <div className="card-item"><span>Суперсилы: </span>{ superPower }</div>
         <img className="picture" src={ src } alt="" />


        </div>
    );
}

export default Hero;


/*
// as a class component:

import React from 'react';

 class Hero extends React.Component{

    render(){

        const {heroName, universe, alterEgo, activity, friends, superPower, src} = this.props;

        return(
            <div className="card">
             <div className="card__title">{ heroName }</div>
             <div className="card-item"><span>Вселенная: </span>{ universe }</div>
             <div className="card-item"><span>Альтер эго: </span>{ alterEgo }</div>
             <div className="card-item"><span>Род деятельности: </span>{ activity }</div>
             <div className="card-item"><span>Друзья: </span>{ friends }</div>
             <div className="card-item"><span>Суперсилы: </span>{ superPower }</div>
             <img className="picture" src={ src } alt="" />
    
    
            </div>
        );
    }
 }

 export default Hero;

 */