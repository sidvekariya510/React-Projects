import './App.css';
import React, { useRef } from 'react'
import { addUser } from './slice/useSlice';
import { useDispatch, useSelector } from 'react-redux';



function App() {

  const dispatch = useDispatch()
  const input = useRef()

  const todo = useSelector((res) => {
    return res.getUser
  })

  const addTodo = () => {
    dispatch(addUser(input.current.value))
    input.current.value = ""
  }


  return (
    <div className="App">
      <input type="text" id="input" ref={input} />
      <button className="btn" onClick={() => {
        addTodo()
      }}>Button</button>

      {
        todo.map((data, index, value) => {
          return (
            <p>{data}</p>
          )
        })
      }
    </div>


  );
}

export default App;
