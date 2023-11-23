import React from 'react'


//calling PROPS {menuData}
const MenuCard = ({ menuData }) => {
    
    return (
        <>
            <section className="main-card-container">
                {menuData.map((data) => {

                    // //Destructuring 
                    // const { id, name, category, image, description } = data
                    // //now while calling the props we don't need to write {data.id} only {id} works. (DRY)
                    return (
                        <>
                            <div className="card-container">
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">
                                            {data.id}
                                        </span>
                                        <span className='card-author subtle'>{data.category}</span>
                                        <h2 className="card-title">{data.name}</h2>
                                        <span className="card-description subtle">
                                            {data.description}
                                        </span>
                                        <div className="card-read">
                                            Read
                                        </div>
                                        <img src={data.image} className='card-media' />
                                        <span className="card-tag subtle">Order Now</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default MenuCard