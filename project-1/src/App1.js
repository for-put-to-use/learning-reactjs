import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import GreetDestructured from './components/GreetDestructured';
import GreetDestructured2 from './components/GreetDestructured2';
import WelcomeDestructured from './components/WelcomeDestructured';

//a functional component
function App() {
  return (
    <div className="App">
      {/* This is a comment */}
      /* This is not a Comment */
      {/* <Greet></Greet>  */}
      <hr/>
      <h2>Functional components:</h2>
      {/* Using Functional Component */}
      <GreetDestructured name="Bruce" heroName="Batman"/>
      <GreetDestructured2 name="Clark" heroName="Supername"/>
      <Greet name="Diana" heroName="Wonder Woman"/>
      <Greet name="Barry Allen" heroName="Flash">
        <p>Nora Allen, Don Allen</p>
      </Greet>
      <hr/>
      <h2>Class components:</h2>
      {/* Using Class Component */}
      <Welcome name="Bruce" heroName="Batman"/>
      <WelcomeDestructured name="Clark" heroName="Supername"/>
      <Welcome name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Barry Allen" heroName="Flash">
        <p>Nora Allen, Don Allen</p>
      </Welcome>
      <Welcome />
      <Hello />

      <hr/>
      <h2>State Demo:</h2>
      <Message />

      <hr />
      <h2>State Demo 2:</h2>
      <Counter />

    </div>
  );
}

export default App;
