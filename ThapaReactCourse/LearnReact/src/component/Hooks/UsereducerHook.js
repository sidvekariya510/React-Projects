import React, { useReducer, useState } from 'react'
import "./style.css"


// defining reducer function
const reducer = (state, action) => {
    if (action.type === "Increment") {
        state = state + 1 
    }
    if (action.type === "Decrement"  && state > 0) {
        state = state - 1 
    }
    return state;
}

//usereducer hook
const UseReducerHook = () => {
    // const initialData = 0;
    // const [myNum, setMyNum] = useState(initialData)
    const initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData)
    //initialData is state's current value
    // state is current state
    //dispatch is used to trigger reducer function 

    return (
        <>
            <div className="container">
                <p>{state}</p>
                <button className='btn1' type="button"
                    onClick={()=> dispatch({type:"Increment"})}>
                    Increment</button>
                <button className='btn2' type="button"
                    onClick={()=> dispatch({type:"Decrement"})}>
                    Decrement</button>
            </div>
        </>
    )
}

export default UseReducerHook;