import React, { createContext, useState } from 'react'
import Child1 from './Child1'

const myContext = createContext('')

const UseContextHook = () => {
    const [first, setfirst] = useState("Hi my name is useContext.")
    return (
        <>
            <myContext.Provider value={first}>
                <Child1 />
            </myContext.Provider>
        </>
    )
}

export default UseContextHook
export { myContext }