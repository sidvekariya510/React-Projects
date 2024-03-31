import React, { useRef, useState } from 'react'

const Calc = () => {
    const input1 = useRef()
    const input2 = useRef()

    const [first, setfirst] = useState(0)
    const [second, setsecond] = useState(0)
    const [third, setthird] = useState(0)
    const [forth, setforth] = useState(0)
    const handleCalc = () => {
        setfirst(Number(input1.current.value) + Number(input2.current.value))
        setsecond(Number(input1.current.value) - Number(input2.current.value))
        setthird(Number(input1.current.value) * Number(input2.current.value))
        setforth(Number(input1.current.value) / Number(input2.current.value))
    }
    return (
        <>
            <input type="number" placeholder='Enter a value'
                ref={input1}
                onChange={() => {
                    handleCalc()
                }}
            />
            <input type="number" placeholder='Enter a value'
                ref={input2}
                onChange={() => {
                    handleCalc()
                }}
            />
            <p>Addition : <span>{first}</span></p>
            <p>Substraction : <span>{second}</span></p>
            <p>Multiplication : <span>{third}</span></p>
            <p>Division : <span>{forth}</span></p>
        </>
    )
}

export default Calc