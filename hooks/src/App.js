import './App.css';
import React from 'react';
import HookCounter from './component/HookCounter';
import HookCouterIncrDecRes from './component/HookCouterIncrDecRes';
import HookCounterIncrDecResWithPrev from './component/HookCounterIncrDecResWithPrev';
import UseStateWithObject from './component/UseStateWithObject';
import UseStateWithArray from './component/UseStateWithArray';
import UseEffectAfterRender from './useEffect/UseEffectAfterRender';
import ConditionallyRunEffects from './useEffect/ConditionallyRunEffects';
import RunEffectOnlyOnceMousePosition from './useEffect/RunEffectOnlyOnceMousePosition';
import MousemoveUnmounting from './useEffect/MousemoveUnmounting';
import IntervalHookCounter from './useEffect/IntervalHookCounter';
import DataFetching from './useEffect/DataFetching';
import DataFetching2 from './useEffect/DataFetching2';
import DataFetching3 from './useEffect/DataFetching3';
import ComponentA from './useContext/ComponentA';
import CounterOne from './useReducer/CounterOne';
import CounterObjOne from './useReducer/CounterObjOne';
import MultipleUseReducers from './useReducer/MultipleUseReducers';
import Global from './useReducerWithUseContext/Global';
import DataFetchingWithuseState from './dataFetching/DataFetchingWithuseState';
import DataFetchingWithuseReducer from './dataFetching/DataFetchingWithuseReducer';
import ParentComponent from './useCallback/ParentComponent';
import Counter from './useMemo/Counter';
import FocusInput from './useRef/FocusInput';
import ClassTimer from './useRef/ClassTimer';
import HookTimer from './useRef/HookTimer';
import DocTitleOne from './customHooks/DocTitleOne';
import DocTitleTwo from './customHooks/DocTitleTwo';
import CountOne from './customHooks/CountOne';
import CountTwo from './customHooks/CountTwo';
import UserForm from './customHooks/UserForm';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* useState examples */}
      {/* <HookCounter/> */}
      {/* <HookCouterIncrDecRes/> */}
      {/* <HookCounterIncrDecResWithPrev/> */}
      {/* <UseStateWithObject/> */}
      {/* <UseStateWithArray/> */}

      {/* useEffect Examples */}
      {/* <UseEffectAfterRender/> */}
      {/* <ConditionallyRunEffects/> */}
      {/* <RunEffectOnlyOnceMousePosition/> */}
      {/* <MousemoveUnmounting/> */}
      {/* <IntervalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <DataFetching2/> */}
      {/* <DataFetching3/> */}

      {/* useContext Examples */}
      {/* <UserContext.Provider value={'karu'}>
        <ChannelContext.Provider value={'youtube'}>
      <ComponentA/>
      </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* useReducer Examples */}
      {/* <CounterOne/> */}
      {/* <CounterObjOne/> */}
      {/* <MultipleUseReducers/> */}

      {/* UseReducerWithUseContext */}
      {/* <Global/> */}

      {/* Data Fetching With useState  */}
      {/* <DataFetchingWithuseState/> */}
      {/* Data Fetching With useReducer  */}
      {/* <DataFetchingWithuseReducer/> */}

      {/* useCallback */}
      {/* <ParentComponent/> */}

      {/* useMemo */}
      {/* <Counter/> */}

      {/* useRef */}
      {/* <FocusInput/> */}
      {/* <ClassTimer/>
      <HookTimer/> */}

      {/* Custom Hook */}
      {/* useDocumentTitle Custom Hook */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}

      {/* useCounter Custom Hook */}
      {/* <CountOne/>
      <CountTwo/> */}

      {/* useInput Custom Hook */}
      {/* <UserForm/> */}

    </div>
  );
}

export default App;
