import './Hero.css';



function Hero(props) {


    return(
        <div className="card">
         <div className="card__title">{props.heroName}</div>
         <div className="card-item"><span>Вселенная: </span>{props.universe}</div>
         <div className="card-item"><span>Альтер эго: </span>{props.alterEgo}</div>
         <div className="card-item"><span>Род деятельности: </span>{props.activity}</div>
         <div className="card-item"><span>Друзья: </span>{props.friends}</div>
         <div className="card-item"><span>Суперсилы: </span>{props.superPower}</div>
         <img className="picture" src={props.src} alt="" />


        </div>
    );
}

export default Hero;