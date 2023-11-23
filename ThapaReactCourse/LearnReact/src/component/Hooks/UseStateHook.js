import React, { useState } from 'react'
import "./style.css"

const useStateHook = () => {
    const initialData = 0;
    const [myNum, setMyNum] = useState(initialData)

    return (
        <>
            <div className="container">
                <p>{myNum}</p>
                <button className='btn1' type="button"
                    onClick={() => { setMyNum(myNum + 1) }}>
                    Increment</button>
                <button className='btn2' type="button"
                    onClick={() => { myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0) }}>
                    Decrement</button>
            </div>
        </>
    )
}

export default useStateHook;