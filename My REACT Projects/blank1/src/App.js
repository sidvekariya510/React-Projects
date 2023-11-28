import react from 'react'
import { Routes, Route } from 'react-router-dom'
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <>
      {/* <Routes>
        <Route to={"/"} element={<ToDoList />}></Route>
      </Routes> */}
      <ToDoList />
    </>
  );
}

export default App;
