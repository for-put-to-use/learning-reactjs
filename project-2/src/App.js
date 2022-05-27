import logo from './logo.svg';
import './App.css';

function App() {
  const myFunction = () => {
    alert("Alert Popped !!!");
  }

  return (
    <div className="App">
      {/* <header className="App-header">

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
      </header> */}
      <div className="customClass">
        <div className="card" style={{ width: "18rem" }}>
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.w3schools.com/react/react_css.asp" className="btn btn-primary">Go somewhere</a>
            <button onClick={myFunction} className="btn btn-primary">Take the shot!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
