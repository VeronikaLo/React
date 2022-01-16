
import './App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import WordList from './components/WordList/WordList';



function App({wordlist}) {
  return (
    <div className="App">
    <Header/>
    
    <WordList/>

    <CardList/>
      
      
    </div>
  );
}

export default App;
