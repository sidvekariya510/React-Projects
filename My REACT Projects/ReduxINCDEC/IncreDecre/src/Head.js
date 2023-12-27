import React from 'react'
import { useSelector } from 'react-redux'

const Head = () => {
    const state = useSelector((state) => {
        return state.INC_DEC.count
    })
    return (
        <div>
            <h1>Cart({state})</h1>
        </div>
    )
}

export default Head