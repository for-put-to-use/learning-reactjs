import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

//a functional component
function App() {
  return (
    <div className="App">
      {/* This is a comment */}
      /* This is not a Comment */
      {/* <Greet></Greet>  */}
      <Greet/>
      <Welcome />
    </div>
  );
}

export default App;
