import goarte from './goarte-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={goarte} className="App-logo" alt="logo" />
        <p>
          Web en desarrollo.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/goarte.estampados"
        >
          Visita nuestro Instagram!
        </a>
      </header>
    </div>
  );
}

export default App;
