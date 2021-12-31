import './App.css';
import Card from './components/Card';
import {tarifs} from './components/Data';

function App() {

  const element = tarifs.map((card, i)=>
  <Card key={i} {...card} />
)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Наши Тарифы</h1>
      </header>
      <div className="cards">
          {element}
      </div>

    </div>
  );
}

export default App;