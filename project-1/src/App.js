import './App.css';
import ClassClick from './components/events-demo/ClassClick';
import FunctionClick from './components/events-demo/FunctionClick';

//a functional component
function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
    </div>
  );
}

export default App;
