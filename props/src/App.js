import './App.css';
import PropsWithFunction from './props/PropsWithFunction'
import PropsWithClass from './props/PropsWithClass'


function App() {
  return (
    <div className="App">
      <h3>Example PropsWithFunction</h3>
      {/* {Props are immutable we cannot change the attribute values in component definition} */}
      {/* In function, we don't use this keyword */}
      {/* In function, we will pass props(we can use custome text instead of prop) input argument to the funtion in component definition */}
      <PropsWithFunction name="youtube" purpose="videos">
        Keep watching <button>Play The video</button>
      </PropsWithFunction>
      <PropsWithFunction name="whatsapp" purpose="chatting">Keep chatting</PropsWithFunction>
      <PropsWithFunction name="facebook" purpose="videos">Connecting people</PropsWithFunction>

      {/* In Class, we use this keyword to fetch data  in component definition*/}
      {/* In Class,Component maintains private variable this.props we can use it to retrive data from parent component */}
      <h3>Example PropsWithClass</h3>
      <PropsWithClass name="youtube" purpose="videos">
        Keep watching <button>Play The video</button>
      </PropsWithClass>
      <PropsWithClass name="whatsapp" purpose="chatting">Keep chatting</PropsWithClass>
      <PropsWithClass name="facebook" purpose="videos">Connecting people</PropsWithClass>
    </div>
  );
}

export default App;
