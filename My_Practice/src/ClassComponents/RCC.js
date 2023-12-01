import React, { Component } from 'react'

export default class RCC extends Component {
    constructor(props) {
        super(props)
        // similar to useState hook, count is variable.
        this.state = { count: 0 }
    }

    setCounterPlus() {
        this.setState({ count: this.state.count + 1 })
    }

    setCounterMinus() {
        this.setState({ count: this.state.count - 1 })
    }


    // componentDidMount() {
    //     console.log("componentDidMount is here");
    // }


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

                    <div className='d-flex flex-column align-items-center text-light'>
                        <hr className='' />
                        <h1>2.</h1>
                    </div>
                </div>





            </>
        )
    }
}
