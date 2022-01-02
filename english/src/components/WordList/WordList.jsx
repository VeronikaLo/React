import './WordList.css';
import {wordList} from '../dataList.js';
import Row from '../Row/Row';


function WordList (props){

    
   return(
    <div className="ListWrapper">
        <table className="table">
            <thead className="thead">
            <tr>
            <th>Word</th>
            <th>Transcription</th>
            <th>Translation</th>
            <th>Category</th>
            <th>Actions</th>
            </tr>
            </thead>

            <tbody className="tbody">
            {
       wordList.map((row, id)=>
       <Row key={id} {...row}></Row>
       )
      }


            </tbody>
        </table>
    </div>
   )
}

export default WordList;