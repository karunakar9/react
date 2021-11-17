import './App.css';
import EventBind1 from './bindingEvents/EventBind1';
import EventBind2 from './bindingEvents/EventBind2';
import EventBind3 from './bindingEvents/EventBind3';
import EventBind4 from './bindingEvents/EventBind4';
import RenderingConditionally from './ConditionalRendering/RenderingConditionally';
import Inline from './cssStyling/Inline';
import StyleSheets from './cssStyling/StyleSheets';
import DestructuringPropsClass from './destructuringPropsAndState/DestructuringPropsClass';
import DestructuringPropsFunction from './destructuringPropsAndState/DestructuringPropsFunction';
import DestructuringPropsFunction2 from './destructuringPropsAndState/DestructuringPropsFunction2';
import ClickEventClass from './eventHandling/ClickEventClass';
import ClickEventFunction from './eventHandling/ClickEventFunction';
import NameList from './listRendering/NameList';
import PersonList from './listRendering/PersonList';
import ParentComponent from './methodsAsProps/ParentComponent';
import ParentComponent2 from './methodsAsProps/ParentComponent2';
import './AppStyle.css'
import moduleStyle from './AppStyle.module.css'
import Form from './formHandling/Form';
import FragmentDemo from './fragments/FragmentDemo';
import Table from './fragments/Table';
import PureComp from './pureComponents/PureComp';
import ParentComp from './pureComponents/ParentComp';
import ParentComps from './memoComponent/ParentComps';
import RefsDemo from './refs/RefsDemo';
import FocusInputFromParent from './refsWithClassComponent/FocusInputFromParent';
import ForwardingRefFromParent from './forwardingRefs/ForwardingRefFromParent';
import PortalsDemo from './portals/PortalsDemo';
import ClickComponent from './HigherOrderComponents/ClickComponent';
import MouseoverComponent from './HigherOrderComponents/MouseoverComponent';
import ClickComponent2 from './HigherOrderComponents/ClickComponent2';
import MouseoverComponent2 from './HigherOrderComponents/MouseoverComponent2';
import ClickCounter from './renderProps/ClickCounter';
import HoverCounter from './renderProps/HoverCounter';
import Candidate from './renderProps/Candidate';
import EventCounter from './renderProps/EventCounter';
import CompA from './context/CompA';
import {UserProvider} from './context/userContext';
import PostLists from './http/PostLists';
import PostForm from './http/PostForm';

function App() {
  return (
    <div className="App">
      {/* START : Destructuring_Props_State */}
      {/* <h3>Functional Props</h3>
      <DestructuringPropsFunction name='youtube(Function)' purpose='videos(Function)'/>
      <DestructuringPropsFunction2 name='youtube2(Function)' purpose='videos2(Function)'/>
      <br></br>
      <h3>Class Props</h3>
      <h5>Note:In class component destructuring will done in render() method</h5>
      <DestructuringPropsClass name='youtube1(Class)' purpose='videos1(Class)'/> */}
      {/* END : Destructuring_Props_State */}

      {/* START : Event Handling */}
      {/* <h3>ClickEventFunction</h3>
      <ClickEventFunction />
      <h3>ClickEventClass</h3>
      <ClickEventClass /> */}
      {/* END : Event Handling */}

      {/* START : Binding Event Handler */}
      {/* <h3>Binding in render method</h3>
      <EventBind1/>
      <h3>Functional call with class method </h3>
      <EventBind2/>
      <h3>Binding in constructor</h3>
      <EventBind3/>
      <h3>Functional call with functional method</h3>
      <EventBind4/> */}
      {/* END : Binding Event Handler */}

      {/* START :Methods as Props */}
      {/* <h3>Here passing parent component method as props to the child component on clicking button from child will call parent method</h3> */}
      {/* <ParentComponent /> */}
      {/* <ParentComponent2 /> */}
      {/* END :Methods as Props */}

      {/* START :Conditional Rendering */}
      {/* <h3>1: IfElse 2: Element variable 3: Terninary conditional operator 4: Short circuit operator </h3>
      <RenderingConditionally/> */}
      {/* END :Conditional Rendering */}

      {/* START :List rendering */}
      {/* <NameList/> */}
      {/* <PersonList/> */}
      {/* END :List rendering  */}

      {/* START :CSS Styling */}
      {/* <h3>1: CSS Stylesheets 2: Inline Styling 3: CSS module 4:(NA):CSS in JS Libaries </h3> */}
      {/* 1: CSS Stylesheets */}
      {/* Method-1 */}
      {/* <StyleSheets/> */}
      {/* Method-2 */}
      {/* <StyleSheets primary={true}/> */}
      {/* 2: Inline Styling */}
      {/* <Inline/> */}
      {/* 3: CSS module */}
      {/* <h5>Note:
       1.Please check here how we imported AppStyle.module.css and  AppStyle.css
       2.Normal css (AppStyle.css) can also be accessble in child components as well if u write below h3 tag in any of the above components implemwntation will work</h5>
       <h3 className='error'>Erorr</h3>
       <h3 className={moduleStyle.success}>Success</h3> */}
      {/* END :CSS Styling  */}

      {/* START :Form Handling */}
      {/* <Form/> */}
      {/* END :Form Handling */}

      {/* START :Fragments */}
      {/* <h3>Note: React fragment let us group children elements  without adding any extra node in DOM</h3> */}
      {/* verify the node structure in console */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* END :Fragments */}

      {/* START :Pure Component */}
      {/* <h3>PureComponent performs shallow comparison of props and state of component before calling pureComp in regular time interval ,PureComp will not call if no change in state  from with present and previous</h3> */}
      {/* <ParentComp/> */}
      {/* END :Pure Component */}

      {/* START :Memo */}
      {/* <h3>PureComponent is for class and memo is for function components</h3>
      <ParentComps/> */}
      {/* END :Memo */}

      {/* START :Refs */}
      {/* <h3>Refs provide a way to access DOM nodes or React elements created in the render method.</h3>
      <RefsDemo/> */}
      {/* END :Refs */}

      {/* START :Refs with ClassComponent */}
      {/* <h3>Aim is to focus child input element from ParentComponent</h3>
      <FocusInputFromParent/> */}
      {/* END :Refs with ClassComponent */}

      {/* START :Forwarding Refs from Parent to child */}
      {/* Child is a functional component to receive ref from Parent */}
      {/* <ForwardingRefFromParent/> */}
      {/* END :Forwarding Refs from Parent to child */}

      {/* START :Portals */}
      {/* Note:Uncomment the node 'portal-root' in index.html */}
      {/* <PortalsDemo/> */}
      {/* START :Portals */}

      {/* START :Error Boundary */}
      {/* END :Error Boundary */}

      {/* START :Higher Order Components */}
      {/* <ClickComponent/>
      <MouseoverComponent/> */}
      {/* <h3>Note-1:Props will be available in hoc function not in ClickComponent2 or MouseoverComponent2,From the hoc function we have to sent props to the commonent that we are enhancing</h3>
      <h3>Note-2:In order to increment based on input we should call the hoc function with incrementNum as second argument</h3>
      <ClickComponent2 learner='karu'/>
      <MouseoverComponent2 learner='karu'/> */}
      {/* END :Higher Order Components */}

      {/* START : Render Props */}
      {/* <h3>Basic thing to now before going to the concept of Render Props ,Check the behavoiur of four methods below by enable every Candidate component</h3> */}
      {/* Method:1 */}
      {/* <Candidate name='karu'/> */}
      {/* Method:2 */}
      {/* <Candidate name={()=>'karu'}/> */}
      {/* Method:3 */}
      {/* <Candidate name={(input)=>input}/> */}
      {/* Method:4 */}
      {/* <Candidate name={(isLoggedIn)=>isLoggedIn?'karu:4':'Guest'}/> */}
      {/* Method:5 */}
      {/* <Candidate render={(isLoggedIn)=>isLoggedIn?'karu:5':'Guest:5'}/> */}
      {/* <EventCounter render={(countFromEventCounter,incrementCountFromEventCounter)=>(
        <ClickCounter counter={countFromEventCounter} incrementCounter={incrementCountFromEventCounter}/>
      )}/>
      <EventCounter render={(countFromEventCounter,incrementCountFromEventCounter)=>(
        <HoverCounter counter={countFromEventCounter} incrementCounter={incrementCountFromEventCounter}/>
      )}/> */}
      {/* END : Render Props */}

       {/* START : Context */}
       {/* There are three steps to making use of context
       Step-1:Create  the context 
       Step-2:Provide a context value 
       Step-3:consume context value
       <UserProvider value="Karu">
       <CompA/>
       </UserProvider> */}
      {/* END :  Context */}

      {/* START : HTTP get/post */}
      {/* <PostLists/> */}
      {/* <PostForm/> */}
      {/* END : HTTP */}

    </div>
  );
}

export default App;