import './Header.css';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
        <header className="App-header">
          <h1>English words</h1>
          <nav className="header-links">
              <Link to="/" className='link'>Home</Link>
              <Link to="/Training" className='link'>Training</Link>
              <Link to="/Categories" className='link'>Categories</Link>
              <Link to="/Add a card" className='link'>Add a card</Link>
          </nav>
        </header>

        </>
    );
  }
  
  export default Header;