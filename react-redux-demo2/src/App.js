import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <div className="App">
         <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <HooksCakeContainer/>
        <IceCreamContainer/> */}

        {/* Passing Input Param */}
        {/* <NewCakeContainer/> */}

        {/* mapStateToProps */}
        {/* <ItemContainer cake/>
        <ItemContainer/> */}

        {/* Asychrnous actions */}
        <UserContainer/>
      </div>
    </Provider>
    </div>
  );
}

export default App;
