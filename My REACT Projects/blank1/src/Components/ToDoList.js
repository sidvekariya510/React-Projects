import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const ToDoList = () => {
    const input = useRef('')
    const input2 = useRef('')

    const [item, setItem] = useState([])

    useEffect(() => {
        getItem()
    }, [])


    const getItem = () => {
        axios.get(`http://localhost:8002/items`).then((response) => {
            setItem(response.data)
            console.log(response.data);
        })
    }
    const addItem = () => {
        if (input.current.value != '') {
            axios.post("http://localhost:8002/items", { name: input.current.value, Description: input2.current.value }).then(() => {
                getItem()
                input.current.value = ''
                input2.current.value = ''
            })
        }
    }

    const deleteItem = (id) => {
        axios.delete(`http://localhost:8002/items/${id}`).then(() => {
            console.log(id);
            getItem()
        })
    }

    return (
        <>
            <div className=''>
                <div className='container-fluid'>
                    <div className="container">
                        <div className="h1">To Do List</div>
                        <div className="">
                            <input ref={input} type="text" placeholder='Enter your item name' />
                            <input ref={input2} type="text" placeholder='Enter item description' />
                            <button onClick={() => {
                                addItem()
                            }}>Add Item</button>
                        </div>
                    </div>
                </div>

                <div className='ToDoList w-100'>
                    {

                        item.map((data, index) => {
                            return (
                                <>
                                    <table className='table table-hover border border-1 m-1 text-warning'>
                                        <tr className='p w-100' >
                                            <td className='text-start  px-3 text-dark'>{data.id}</td>
                                            <td className='text-start  px-3 text-dark'>{data.name}</td>
                                            <td className='text-start  px-3 w-100 text-warning'>{data.Description}</td>
                                            <td className='text-end'>
                                                <button type="button" className="btn text-center">
                                                    <i className="fa-regular fa-pen-to-square" ></i>
                                                </button>
                                            </td>
                                            <td className='text-end'>
                                                <button className='btn' onClick={() => {
                                                    deleteItem(data.id)
                                                }}>
                                                    <i className="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ToDoList