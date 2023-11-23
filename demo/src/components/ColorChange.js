import React from 'react';

const ColorChange = () => {

    // const [mainVal, setmainVal] = useState(null)
    
    const getData = (i) => {
        // setmainVal(input.target.value)
        document.body.style.backgroundColor = i.target.value
    }
    return (
        <>
            <div className="container my-4 py-5 d-flex flex-column align-items-center">
                <h1>Type a color name to change the background color.</h1>
                <input className='my-4' type="text" onChange={getData} />
            </div>
        </>
    )
}

export default ColorChange