import './App.css';
import React from 'react';
import hero from './res/hero_image.png';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <header className="App-header">
          <img src={hero} className="App-logo" alt="logo" />
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

export default App;
