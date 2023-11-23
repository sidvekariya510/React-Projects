import React from 'react'
import image from "./images/3D Landscape (5).jpg"
import image2 from "./images/3D Landscape (6).jpg"
import image3 from "./images/3D Landscape (7).jpg"
import image4 from "./images/3D Landscape (10).jpg"
import image5 from "./images/3D Landscape (11).jpg"
import image6 from "./images/3D Landscape (17).jpg"

const Cards = () => {
    return (
        <>
            <div className="card-group m-5">
                <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Helsinki</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={image2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Montreal</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 10 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={image3} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Costa Rica</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 5 mins ago</small>
                    </div>
                </div>
            </div>
            <div className="card-group m-5">
                <div className="card">
                    <img src={image4} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Helsinki</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 2 mins ago</small>
                    </div>
                </div> 
                <div className="card">
                    <img src={image5} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Montreal</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 6 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img src={image6} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Costa Rica</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 8 mins ago</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards