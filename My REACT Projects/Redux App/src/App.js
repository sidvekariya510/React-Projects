//redux used for passing data from one component to another component or anywhere in the react app.

import './App.css';
// import User from './User';
import HomeContainer from './Containers/HomeContainer'

function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
      <HomeContainer />


      {/* <User data={{ name: "Siddharth", age: 28 }} /> */}
    </div>
  );
}

export default App;
