import react from 'react'
import { Routes, Route } from 'react-router-dom'
import PhoneBook from './Components/PhoneBook';

function App() {
  return (
    <>
      {/* <Routes>
        <Route to={"/"} element={<ToDoList />}></Route>
      </Routes> */}
      <PhoneBook />
    </>
  );
}

export default App;
