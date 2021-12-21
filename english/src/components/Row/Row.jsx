import './Row.css';

import del from '../assets/delete.png';
import pen from '../assets/pencil.png';
import sav from '../assets/save.png';

function Row (props){

    const {word, meaning, transcription, translation, theme, isSelected} =props;
    let selected ="";
    if (isSelected) selected = "selected";
   return(
    <>
    <tr className={selected}>
                <td>{word}</td>
                <td>{transcription}</td>
                <td>{meaning}</td>
                <td>{translation}</td>
                <td>{theme}</td>
                <td className="actions">
                    <button className="btnRow"><img src= {del} alt="" /></button>
                    <button className="btnRow"><img src= {pen} alt="" /></button>
                    { isSelected&&
                        <button className="btnRow"><img src= {sav} alt="" /></button>
                    }
                </td>
            </tr>
    </>
        
    
   )
}

export default Row;