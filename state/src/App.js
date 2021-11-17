import './App.css';
import StateInClass from './state/StateInClass'
import StateWithCounter from './state/StateWithCounter';
import StateCounterWithPrevious from './state/StateCounterWithPrevious'

function App() {
  return (
    <div className="App">
      {/* {'State' is mutable we can change content} */}
      {/* We use  this keyword */}
      {/* In Class private variable 'state' maintianed within the component */}
      <StateInClass />
      {/* Counter example */}
      <StateWithCounter/>
      <h4>Fivecounter call method with prevState</h4>
      <StateCounterWithPrevious/>
    </div>
  );
}

export default App;
