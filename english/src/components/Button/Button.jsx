import './Button.css';

function Button (props){

    const {text,color} =props;
    
   return(
       <div className={"button" + color}>
        <button>{text}</button>
        </div>

   )
}

export default Button;