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
    const [input, commitInput ] = useState({word:word,transcription:transcription, translation:translation, theme:theme});
    
    
    // editing Mode on/off
    const handleEditing = () => {
        setEdited(!editedMode);
    };

    
    //
    /*1.способ: прописываем все импутs по отдельности:

    const handleWordChange = (e) => {
        commitInput({
            ...input,
            word:e.target.value
        });  
    }; 

    const handleTranscriptionChange = (e) => {
        commitInput({
            ...input,
            transcription:e.target.value
        });  
    };

        const handleTranslationChange = (e) => {
        commitInput({
            ...input,
            translation:e.target.value
        });  
    };

        const handleThemeChange = (e) => {
        commitInput({
            ...input,
            theme:e.target.value
        });  
    };

    */


    // 2.способ : прописываем 1 функцию для всех импутов, добaвляем атрибут name    
    const handleChange = (e) => {
        const { name, value } = e.target;
        commitInput((previousState) => {
            return {
            ...previousState,
            [name]: value,
            };
        });
    }


   return(

    <>
   
    <tr className={editedMode? "edited": ""}>
                <td>{editedMode? <input className='input' name = "word"  value={input.word} onChange={handleChange} />: word}</td>
                <td>{editedMode? <input className='input' name = "transcription" value={input.transcription} onChange={handleChange}/>: transcription}</td>
                <td>{editedMode? <input className='input' name = "translation" value={input.translation} onChange={handleChange}/>: translation}</td>
                <td>{editedMode? <input className='input' name = "theme" value={input.theme} onChange={handleChange}/>: theme}</td>
                <td className="actions">
                { editedMode?<button className="btnRow" onClick={handleEditing}><img src= {sav} alt="" /></button>: <button className="btnRow"><img src= {del} alt="" /></button>}
                { editedMode?<button className="btnRow" onClick={handleEditing} ><img src= {cans} alt="" /></button>: <button className="btnRow" onClick={handleEditing}><img src= {pen} alt="" /></button>}       
                
                </td>
    </tr>
    </>
        
    
   )
}

export default Row;