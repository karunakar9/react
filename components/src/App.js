import './App.css';
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import { ArrowFunctions } from './components/ArrowFunctions'// we should use {} only for named export

function App() {
  return (
    <div className="App">
      Hello
      <FunctionalComponent />
      <ClassComponent />
      <ArrowFunctions />
    </div>
  );
}

export default App;
