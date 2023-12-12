import React, { Component } from 'react'

export default class RCC extends Component {
    constructor(props) {
        super(props)
        // similar to useState hook, count is variable.
        this.state = { count: 0, task: [] }

    }
    //Project 1
    setCounterPlus() {
        this.setState({ count: this.state.count + 1 })
    }

    setCounterMinus() {
        this.setState({ count: this.state.count - 1 })
    }

    //Project 2
    Add() {
        if (document.getElementById('input').value == '') {
            alert("Please fill the data")
        } else {
            this.setState({ task: [...this.state.task, { name: document.getElementById('input').value }] })
            document.getElementById('input').value = ''
        }
    }

    Delete(index) {
        var DeletedData = this.state.task.filter((data, id) => {
            return index !== id
        })
        this.setState({ task: DeletedData });
        console.log(DeletedData);
    }



    render() {
        return (
            <>
                <div className="RCC">
                    {/* Plus Minus Counter */}
                    <div className='d-flex flex-column align-items-center text-light pt-5'>
                        <hr className='' />
                        <h1>1. COUNTER APP</h1>
                        <div className='my-4'>
                            <h1 className='text-warning'>{this.state.count}</h1>
                        </div>
                        <div className="buttons">
                            <button className='btn btn-dark m-2' onClick={() => {
                                this.setCounterPlus()
                            }}>Increment</button>
                            <button className='btn btn-dark m-2' onClick={() => {
                                this.setCounterMinus()
                            }}>Decrement</button>
                        </div>
                    </div>

                    {/* Task APP */}
                    <div className='TaskApp d-flex flex-column align-items-center justify-content-center text-light'>
                        <hr className='text-light w-100 my-4' />
                        <h1>2. TASK APP</h1>

                        <div className="my-4 row w-50">
                            <input className='col-9 border border-light text-light bg-transparent p-2' type="text" id='input' placeholder='Enter task name' />
                            <button className='col-3 btn btn-warning rounded-0' onClick={() => {
                                this.Add()
                            }}>Add</button>
                            {
                                this.state.task.map((data, index) => {
                                    return (<>

                                        <div className="">
                                            <div className="data border border-light row">
                                                <h5 className='col-9 d-flex align-items-center text-wrap'>{data.name}</h5>
                                                <button className='btn text-end col-2'>
                                                    <i className="fa-regular fa-pen-to-square" style={{ backgroundColor: "transparent", color: "white" }}></i>
                                                </button>
                                                <button className='btn text-center col-1' onClick={() => { this.Delete(index) }}>
                                                    <i className="fa-solid fa-trash" style={{ backgroundColor: "transparent", color: "white" }} ></i>
                                                </button>
                                            </div>
                                        </div>
                                    </>)
                                })
                            }
                        </div>
                    </div>
                </div>





            </>
        )
    }
}
