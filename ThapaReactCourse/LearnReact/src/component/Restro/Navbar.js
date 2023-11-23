import React from 'react'
//calling multiple PROPS by separating with comma 
const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className="navbar">
                <div className="btn-group">

                    {
                        menuList.map((data) => {
                            return (
                                <button className="btn-group__item" onClick={() => {
                                    filterItem(data)
                                }}>{data}</button>
                            )
                        })
                    }




                    {/* <button className="btn-group__item" onClick={() => {
                        filterItem("lunch")
                    }}>Lunch</button>
                    <button className="btn-group__item" onClick={() => {
                        filterItem("evening")
                    }}>Evening</button>
                    <button className="btn-group__item" onClick={() => {
                        filterItem("dinner")
                    }}>Dinner</button> */}
                </div>
            </nav >

        </>
    )
}

export default Navbar