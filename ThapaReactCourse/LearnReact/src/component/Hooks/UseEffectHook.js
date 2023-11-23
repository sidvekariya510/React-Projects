import React, { useEffect, useState } from 'react'
// import "./style.css"

const UseEffectHook = () => {
    const initialData = 0;
    const [myNum, setMyNum] = useState(initialData)


    useEffect(() => {
    // console.log("Hi");
    document.title = `Chats(${myNum})`;
    },[])
    // [] =it shows array dependency, becoz of this useEffect will run once on reload
    // without [] this useEffect will run everytime

    return (
        <>
            <div className="container">
                <p>{myNum}</p>
                <button className='btn1' type="button"
                    onClick={() => { setMyNum(myNum + 1) }}>
                    Increment</button>
            </div>
        </>
    )
}

export default UseEffectHook;