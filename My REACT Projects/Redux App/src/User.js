import React from "react";

const User = (props) => {

    const { data } = props
    return (
        <>
            <div className="user">
                <p>{data.name}</p>
                <p>{data.age}</p>
            </div>
        </>
    )
}

export default User;