import React from 'react'
import { Link } from 'react-router-dom'

const SubHeader = () => {
    return (
        <div className='SubHeader'>
            {/* <!-- section-1 container --> */}
            <div className="section1 container-fluid d-flex gx-0">
                <div className="overlay container">
                    <div className="innercontainer container-fluid">
                        <div className="row banner d-flex justify-content-between text-light gx-0">

                            {/* <!-- Heading --> */}
                            <div className="h3 col-sm-4 col-4 text-sm-start">
                                Commute</div>

                            {/* <!-- menu button --> */}
                            <div className="menu col-sm-8 col-8 text-end ">
                                <a className="bar btn btn-transparent" data-bs-toggle="collapse" href="#collapseExample"
                                    role="button" aria-expanded="false" aria-controls="collapseExample">
                                    <i className="fa-solid fa-bars fa-xl" style={{ color: "#ffffff" }}></i>
                                </a>
                            </div>
                            <div className="collapse" id="collapseExample">
                                <div className="card card-body text-center list-unstyled bg-dark bg-gradient">
                                    <li><Link className="dropdown-item fs-5 text-warning" to="/Home">Home</Link></li>
                                    <li><Link className="dropdown-item fs-5 text-warning" to="/AboutUs">About Us</Link></li>
                                    <li><Link className="dropdown-item fs-5 text-warning" to="/Services">Services</Link></li>
                                    <li><Link className="dropdown-item fs-5 text-warning" to="/Gallery">Gallery</Link></li>
                                    <li><Link className="dropdown-item fs-5 text-warning" to="/Contact">Contact</Link></li>
                                    <li><Link className="dropdown-item fs-5 text-light" to="/Contact">
                                        <i className="fa-solid fa-phone fa-sm p-2 text-warning" ></i>
                                        +12 34 3456 7890</Link></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubHeader