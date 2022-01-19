import { BrowserRouter as Router,
        Route,
        Routes } from 'react-router-dom';


import './App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';
import WordList from './components/WordList/WordList';



function App({wordlist}) {
  return (
    <Router>
    
      <div className="App">
        <Header/>
        
      <Routes>
        <Route path="/" element={<WordList />}/>
        
        <Route path="/Training" element={<CardList/>}/>

        <Route path="/Categories">
          Still in process
        </Route>

        <Route path="/Add a card">
          Still in process
        </Route>
      </Routes>
      
      </div>
    
    </Router>
  );
}

export default App;
