import React from 'react'
import { useState, useRef } from 'react';

const CodingExercise = () => {
  const input1 = useRef()
  const input2 = useRef()

  const [first, setfirst] = useState(0)
  const [second, setsecond] = useState(0)
  const [third, setthird] = useState(0)
  const [forth, setforth] = useState(0)

  const handleCalc = () => {
    setfirst(Number(input1.current.value) + Number(input2.current.value))
    setsecond((input1.current.value - input2.current.value))
    setthird((input1.current.value * input2.current.value))
    setforth((input1.current.value / input2.current.value))
  }

  return (
    <>
      <input type="number" ref={input1} placeholder='Enter a number'
        onChange={() => {
          handleCalc()
        }}
      />
      <input type="number" ref={input2} placeholder='Enter a number'
        onChange={() => {
          handleCalc()
        }}
      />
      <p>Addition + : {first} </p>
      <p>substarction - : {second} </p>
      <p>Multiplication * : {third} </p>
      <p>Division / : {forth} </p>

    </>
  )
}

export default CodingExercise