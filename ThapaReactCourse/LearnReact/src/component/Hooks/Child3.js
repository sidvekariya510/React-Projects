import React, { useContext } from 'react'
import { myContext } from './UseContextHook'

const Child3 = () => {
    const importedContext = useContext(myContext)
    return (
        <>
            <h1>{importedContext}</h1>
        </>
    )
}

export default Child3