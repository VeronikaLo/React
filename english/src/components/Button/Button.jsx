import './Button.css';

function Button (props){

    const {text,color} =props;
    
   return(
       <div>
        <button className={"button " + color }>{text}</button>
        </div>

   )
}

export default Button;