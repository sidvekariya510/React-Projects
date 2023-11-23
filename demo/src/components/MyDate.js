import React, { useState } from 'react';


const MyDate = () => {

    var [myNum, setmyNum] = useState(null)
    var myCounter = () => {

        setInterval(() => {

            let dt = Date.now();
            setmyNum(Date(dt));

        }, 1000);
    }

    return (
        <>
            {myCounter()}
            <div className="container-fluid g-0 m-auto text-center w-100" >
                <p className='text-center bg-dark text-light fs-3'>{myNum}</p>
                {/* <button onClick={myCounter}>Show Date</button> */}
            </div>
        </>
    )
}

export default MyDate