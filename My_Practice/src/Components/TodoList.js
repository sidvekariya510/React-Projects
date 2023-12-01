import React, { useState, useRef } from 'react'
import "./TodoStyle.css"



const ToDo = () => {
    const input = useRef()

    const [toDo, setToDo] = useState([])
    const [index, setIndex] = useState(null)

    const addTask = async (data) => {
        if (index == null) {
            if (input.current.value === "") {
                alert("Please fill the data.")
            }
            else {
                await setToDo((prevArray) => [...prevArray, input.current.value])
                input.current.value = ''
            }
        } else {
            updateTask()
        }
    }

    const clearAll = () => {
        setToDo([]);
    }
    // i is an array index
    const deleteItem = (i) => {
        const newToDo = [...toDo];

        // delete items using splice method
        // newToDo.splice(i, 1)
        // setToDo(newToDo)


        //delete items using filter method
        const filtered = newToDo.filter((data, index, value) => {
            return index !== i
        })
        setToDo(filtered)
    }

    const getEditItem = (data, i) => {
        input.current.value = data
        setIndex(i)
        document.getElementById("main-btn").innerHTML = "Update Item"
    }


    const updateTask = () => {
        const updateTodo = [...toDo];
        var updateData = updateTodo.map((data, i, value) => {
            if (index == i) {
                return input.current.value
            } else {
                return data
            }
        })
        setToDo(updateData)
        setIndex(null)
        input.current.value = ''
        document.getElementById("main-btn").innerHTML = "Add Item"
    }



    return (

        <>
            <div className="main d-flex flex-column align-items-center pt-5">
                <figure>
                    <img src="./images/blueNotes.png" alt="" width={"100px"} />
                    <figcaption>To - Do App
                    </figcaption>
                </figure>
                <div className="add_items">

                    <input ref={input} className='form-control' type="text" placeholder='✍️ Add Your Tasks' />
                    <button id="main-btn" className='btn btn-warning ms-3' onClick={() => {
                        addTask(toDo)
                    }}>Add Item</button>


                </div>
                <div className="pt-2">
                    {
                        // array map has data, index, value always
                        toDo.map((data, i, value) => {
                            return (
                                <>
                                    <div className='todoList '>
                                        <table className='table table-hover border border-1 m-1 text-warning'>
                                            <tr className='p ' >
                                                <td className='text-start  px-3 w-100'>{data}</td>
                                                <td className='text-end'>
                                                    <button type="button" class="btn text-center"
                                                        onClick={() => {
                                                            getEditItem(data, i)
                                                        }}>
                                                        <i className="fa-regular fa-pen-to-square" ></i>
                                                    </button>
                                                </td>
                                                <td className='text-end'>
                                                    <button className='btn' onClick={() => {
                                                        deleteItem(i)
                                                    }}>
                                                        <i className="fa-solid fa-trash" ></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="text-center mt-4">
                    <button className='btn btn-warning' onClick={() => {
                        clearAll()
                    }}>Clear List</button>
                </div>
            </div>
        </>

    )
}

export default ToDo