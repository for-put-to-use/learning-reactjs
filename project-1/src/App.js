import './App.css';
import ClassClick from './components/events-demo/ClassClick';
import EventBind from './components/events-demo/EventBind';
import FunctionClick from './components/events-demo/FunctionClick';
import ParentComponent from './components/parent-child-rln/ParentComponent';

//a functional component
function App() {
  return (
    <div className="App">
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}

      <ParentComponent />
    </div>
  );
}

export default App;
