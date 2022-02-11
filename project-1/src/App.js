import './App.css';
import Greet from './components/Greet';

//a functional component
function App() {
  return (
    <div className="App">
      {/* This is a comment */}
      /* This is not a Comment */
      <Greet></Greet> 
      <Greet/>
    </div>
  );
}

export default App;
