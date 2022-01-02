import './Row.css';

import React, {useState} from 'react';
import del from '../assets/delete.png';
import pen from '../assets/pencil.png';
import sav from '../assets/save.png';
import cans from '../assets/cancel.png';

function Row (props){

    const {word, transcription, translation, theme,} = props;
  //State
    const [editedMode, setEdited] = useState(false);
    // editing Mode on
    const handleEditing = () => {
        setEdited(!editedMode);
    };

    // editing Mode off
    const handleCancelling = () => {
        setEdited(!editedMode);
    };

    

   return(
    <>
   
    <tr className={editedMode? "edited": ""}>
                <td>{editedMode? <input className='input' defaultValue={word}/>: word}</td>
                <td>{editedMode? <input className='input' defaultValue={transcription}/>: transcription}</td>
                <td>{editedMode? <input className='input' defaultValue={translation}/>: translation}</td>
                <td>{editedMode? <input className='input' defaultValue={theme}/>: theme}</td>
                <td className="actions">
                { editedMode?<button className="btnRow"><img src= {sav} alt="" /></button>: <button className="btnRow"><img src= {del} alt="" /></button>}
                { editedMode?<button className="btnRow" onClick={handleCancelling} ><img src= {cans} alt="" /></button>: <button className="btnRow" onClick={handleEditing}><img src= {pen} alt="" /></button>}       
                
                </td>
    </tr>
    </>
        
    
   )
}

export default Row;