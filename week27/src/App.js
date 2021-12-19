
import './App.css';
import Card from './components/Card';
import {tarifs} from './components/Data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Наши Тарифы</h1>
      </header>
      <div className="cards">
      {
       tarifs.map((card)=>
       <Card tarif={card.tarif} price={card.price} volume={card.volume} extra={card.extra} isSelected={card.isSelected} ></Card>
       )
      }
      </div>

    </div>
  );
}

export default App;
