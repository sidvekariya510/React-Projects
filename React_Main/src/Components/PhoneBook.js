import React, { useState, useEffect, useRef } from 'react'
import './PhoneStyle.css'
import axios from 'axios'

const PhoneBook = () => {
    const input = useRef('')
    const input2 = useRef('')
    const input3 = useRef('')

    const [item, setItem] = useState([])

    const [editId, setEditId] = useState(null)

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
        if (editId == null) {
            if (input.current.value == '') {
                alert("Please fill the data.")
            } else {
                axios.post("http://localhost:8002/items",
                    { firstname: input.current.value, lastname: input2.current.value, phone: input3.current.value })
                    .then(() => {
                        getItem()
                        input.current.value = ''
                        input2.current.value = ''
                        input3.current.value = ''
                    })
            }
        }
        else {
            axios.put(`http://localhost:8002/items/${editId}`,
                { firstname: input.current.value, lastname: input2.current.value, phone: input3.current.value })
                .then(() => {
                    getItem()
                    input.current.value = ''
                    input2.current.value = ''
                    input3.current.value = ''
                    setEditId(null) //to change the functioning of btn from update to add.
                })
        }

        // if (input.current.value == '') {
        //     getItem() //to stop adding blank data
        // }
    }

    const deleteItem = (id) => {
        axios.delete(`http://localhost:8002/items/${id}`).then(() => {
            console.log(id);
            getItem()
        })
    }

    const updateItem = (id) => {
        let editData = item.filter((response) => {
            return response.id == id
        })

        input.current.value = editData[0].firstname;
        input2.current.value = editData[0].lastname;
        input3.current.value = editData[0].phone;
        setEditId(editData[0].id)
    }

    return (
        <>
            <div className='PhoneBook'>
                <div className=''>
                    <div className="">
                        <div className="h1 text-center pt-5 text-warning"><i class="fa-solid fa-phone text-light"></i> Phonebook</div>
                        <div className="mt-4 text-center">
                            <input ref={input} type="text" placeholder='Enter First Name' />
                            <input ref={input2} type="text" placeholder='Enter Last Name' />
                            <input ref={input3} type="number" placeholder='Enter Phone No.' />
                        </div>
                        <div className='text-center my-3'>
                            <button className='btn' onClick={() => {
                                addItem()
                            }}>Save Contact</button>
                        </div>
                    </div>
                </div>

                <div className='phonebooktable'>
                    {

                        item.map((data, index) => {
                            return (
                                <>
                                    <div className="">
                                        <table className='table table-hover border border-1 text-warning w-75'>
                                            <tr className='d-flex row align-items-center p-1 px-4' >
                                                <td className='col-1 text-start text-light' >{index + 1}</td>
                                                <td className='col-3 text-start text-warning fw-light'>{data.firstname}</td>
                                                <td className='col-3 text-start text-light fw-light'>{data.lastname}</td>
                                                <td className='col-3 text-start text-light fw-light'>{data.phone}</td>
                                                <td className='col-1'>
                                                    <button className="btn"
                                                        onClick={() => {
                                                            updateItem(data.id)
                                                        }}>
                                                        <i className="fa-regular fa-pen-to-square p-1" ></i>
                                                    </button>
                                                </td>
                                                <td className='col-1'>
                                                    <button className='btn'
                                                        onClick={() => {
                                                            deleteItem(data.id)
                                                        }}>
                                                        <i className="fa-solid fa-trash p-1"></i>
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
            </div>
        </>
    )
}

export default PhoneBook