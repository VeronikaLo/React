import './WordList.css';
import {wordList} from '../DataList';
import Row from '../Row/Row';


function WordList (props){

    //const {word, meaning, transcription, translation, theme} =props;
    
   return(
    <div className="ListWrapper">
        <table className="table">
            <thead className="thead">
            <tr>
            <th>word</th>
            <th>transcription</th>
            <th>meaning</th>
            <th>translation</th>
            <th>theme</th>
            <th>actions</th>
            </tr>
            </thead>

            <tbody className="tbody">
            {
       wordList.map((row, index)=>
       <Row key={index} word={row.word} transcription={row.transcription} meaning={row.meaning} translation={row.translation} theme={row.theme} isSelected={row.isSelected}></Row>
       )
      }


            </tbody>
        </table>
    </div>
   )
}

export default WordList;