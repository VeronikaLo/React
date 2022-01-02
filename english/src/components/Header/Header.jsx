import './Header.css';


function Header() {
    return (
        <>
        <header className="App-header">
          <h1>English words</h1>
          <div className="header-links">
              <a href="http://" className='link'>Home</a>
              <a href="http://" className='link'>Training</a>
              <a href="http://" className='link'>Categories</a>
              <a href="http://" className='link'>Add a card</a>
          </div>
        </header>

        </>
    );
  }
  
  export default Header;