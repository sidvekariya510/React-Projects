import React, { useState } from 'react'
import "./style.css"



const ToDo = () => {

    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);

    const addItems = () => {
        
        if (!inputData) {
            alert("please fill the data.")
        } else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };

            setItems([...items, myNewInputData]);
            setInputData("");
        }
    }


    // how to delete items
    const deleteItem = (index) => {
        const updatedItems = items.filter((curElm) => {
            return curElm.id !== index;
        })
        setItems(updatedItems);
    };

    const removeAll = () => {
        setItems([]);
    };


    
    return (

        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input
                            type="text"
                            placeholder="✍ Add Item"
                            className="form-control"

                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        {/* <i className="far fa-edit add-btn"></i> */}
                        <i className="fa fa-plus add-btn" onClick={() => {
                            addItems()
                        }}></i>

                    </div>
                    {/* show our items  */}
                    <div className="showItems">
                        {items.map((curElm) => {
                            return (
                                <div className="eachItem" key={curElm.id}>
                                    <h3>{curElm.name}</h3>
                                    <div className="todo-btn">
                                        <i
                                            className="far fa-edit add-btn"
                                        ></i>
                                        <i
                                            className="far fa-trash-alt add-btn" onClick={() => {
                                                deleteItem(curElm.id);
                                            }}
                                        ></i>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* remove all button  */}
                    <div className="showItems">
                        <button
                            className="btn effect04"
                            data-sm-link-text="Remove All"
                            onClick={() => {
                                removeAll()
                            }}
                        >
                            <span> CHECK LIST</span>
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ToDo