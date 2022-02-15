import './App.css';
import ClassClick from './components/events-demo/ClassClick';
import EventBind from './components/events-demo/EventBind';
import FunctionClick from './components/events-demo/FunctionClick';

//a functional component
function App() {
  return (
    <div className="App">
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      <EventBind />
    </div>
  );
}

export default App;
