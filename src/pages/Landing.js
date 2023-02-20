import goarte from "../goarte-logo.png";

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={goarte} className="App-logo" alt="logo" />
        <p>web en desarrollo.</p>
        <a
          className="App-link"
          href="https://www.instagram.com/goarte.estampados"
        >
          visita nuestro Instagram!
        </a>
      </header>
    </div>
  );
}

export default Landing;
