
import './App.css';
import Card from './components/Card/Card'
import WordList from './components/WordList/WordList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>English words</h1>
      </header>

      <WordList></WordList>
    </div>
  );
}

export default App;
