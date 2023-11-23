import React, { useRef } from 'react'

const UseRef = () => {

    const input = useRef('');
    const TextCopy = () => {
        document.getElementById('p').innerHTML = input.current.value;
    }
    const onFocusGet = () => {
        input.current.focus();
    }
    return (
        <>
            <input type="text" ref={input} onChange={() => {
                TextCopy()
            }} />
            <button onClick={() => { onFocusGet() }}>Focus</button>
            <p id="p"></p>
        </>
    )
}

export default UseRef