import '../../App.css';
import UserGreetingElementVar from './UserGreetingElementVar';
import UserGreetingIfElse from './UserGreetingIfElse';
import UserGreetingShortCircuitOp from './UserGreetingShortCircuitOp';
import UserGreetingTernaryOp from './UserGreetingTernaryOp';

//a functional component
function App() {
  return (
    <div className="App">
      <UserGreetingIfElse />
      <UserGreetingElementVar />
      <UserGreetingTernaryOp />
      <UserGreetingShortCircuitOp />
    </div>
  );
}

export default App;
