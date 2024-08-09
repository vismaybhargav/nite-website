import './App.css';
import React from 'react';
import logo from './logo.svg'

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    </>
  );
}

function NavBar() {
  // TODO: Make the NavBar look nicer. Learn some css while your at it.
  // TODO: Change the logo! once we get a graphic desiner
  return <nav className="App-navbar"> <img src={logo} alt='Logo' width={50} height={50} /> NITE</nav>
}

export default App;
