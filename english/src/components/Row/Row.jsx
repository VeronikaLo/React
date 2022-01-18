import './Row.css';

import React, {useState} from 'react';
import del from '../assets/delete.png';
import pen from '../assets/pencil.png';
import sav from '../assets/save.png';
import cans from '../assets/cancel.png';

function Row (props){

    const {word, transcription, translation, theme, id} = props;

    //State
    const [editedMode, setEdited] = useState(false);
    const [input, commitInput ] = useState({word, transcription, translation, theme,id});
    
    
    
    const handleEditing = () => {
        setEdited(!editedMode);
    };

    const handleCancel = () => {
        commitInput({word, transcription, translation, theme,id});
        setEdited(!editedMode);
    };

    // Editing imputs
    /* 1.способ: прописываем все импутs по отдельности:
 

    const handleWordChange = (e) => {
        commitInput({
            word:e.target.value,
            transkription: input.transcription,
            translation: input.translation,
            theme: input.theme

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
        commitInput((prevState) => {
            return {
            ...prevState,
            [name]: value,
            };
        });
    }




    if(editedMode){
        return(
            <>
                <tr className= "edited">
                    <td> <input className='input' name = "word"  value={input.word} onChange={handleChange} /></td>
                    <td> <input className='input' name = "transcription" value={input.transcription} onChange={handleChange}/></td>
                    <td><input className='input' name = "translation" value={input.translation} onChange={handleChange}/></td>
                    <td><input className='input' name = "theme" value={input.theme} onChange={handleChange}/></td>
                    <td className="actions">
                    <button className="btnRow" onClick={handleEditing}><img src= {sav} alt="" /></button>
                    <button className="btnRow" onClick={handleCancel} ><img src= {cans} alt="" /></button>       
                    </td>
                </tr>
            </>
        )
    }

    else {
        return(
            <>
                <tr >
                    <td>{ input.word }</td>
                    <td>{ input.transcription }</td>
                    <td>{ input.translation }</td>
                    <td>{ input.theme }</td>
                    <td className="actions">
                    <button className="btnRow"><img src= {del} alt="" /></button>
                    <button className="btnRow" onClick={handleEditing}><img src= {pen} alt="" /></button>       
                    </td>
                </tr>
            </>
                
            
        )
    }

}

export default Row;