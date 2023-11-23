import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className="Home">
                {/* <!-- section-1 container --> */}
                <div className="section1 container-fluid d-flex gx-0">
                    <div className="overlay container">
                        <div className="innercontainer container-fluid">
                            <div className="row banner d-flex justify-content-center text-light gx-0">

                                {/* <!-- Heading --> */}
                                <div className="h3 fw-bold col-xl-2 col-lg-3 col-sm-4 text-md-start text-sm-start text-center"
                                    style={{ letterSpacing: "1px" }}>
                                    Commute</div>

                                {/* <!-- menu button --> */}
                                <div className="menu d-lg-none d-sm-flex justify-content-sm-end col-xl-9 col-lg-9 col-sm-8 col-auto">
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


                                {/* <!-- Menu list --> */}
                                <div
                                    className="d-lg-flex d-md-none d-sm-none d-none col-xl-10 col-lg-9 col-md-12 col-sm-12 justify-content-end text-center p-2">
                                    <ul className="list-unstyled d-md-flex justify-content-md-center align-items-md-center d-sm-block">
                                        <li className=""><Link to="/Home"
                                            className=" text-light text-decoration-none px-xl-4 px-sm-2">Home</Link></li>
                                        <li className=""><Link to="/AboutUs"
                                            className=" text-light text-decoration-none px-xl-4 px-sm-2">About Us</Link>
                                        </li>
                                        <li className=""><Link to="/Services"
                                            className=" text-light text-decoration-none px-xl-4 px-sm-2">Services</Link>
                                        </li>
                                        <li className=""><Link to="/Gallery"
                                            className=" text-light text-decoration-none px-xl-4 px-sm-2">Gallery</Link>
                                        </li>
                                        <li className=""><Link to="/Contact"
                                            className=" text-light text-decoration-none px-xl-4 px-sm-0">Contact</Link>
                                        </li>
                                        <li> <i className="fa-solid fa-phone fa-sm ps-2" style={{ color: "#ffd70f" }}></i>
                                            <Link className='text-light text-decoration-none px-xl-1 px-sm-0' to="/Contact">+12 34 3456 7890</Link>
                                        </li>
                                    </ul>
                                </div>

                                {/* <!--Sub Section-1 --> */}
                                <div
                                    className="innercontent row text-center d-flex flex-row align-items-center justify-content-center p-lg-5 p-md-1 p-sm-1 ">
                                    <h1 className="col-xxl-10 col-sm-12 text-light fw-bold display-5 px-sm-0">TRIP
                                        NOW EXCEPTIONAL
                                        ADVENTURE</h1>
                                    <p className="col-sm-12 text-light fs-3  px-sm-0">Vestibulum Consequat. Curabitur Mauris
                                        Justo</p>
                                    <Link to="/Home"
                                        className="col-lg-4 col-sm-5 text-light fw-light text-decoration-none fs-4 py-3 px-0 border border-1 px-sm-0 gx-0 ">Read
                                        More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* <!-- section-2 Container --> */}
                <div className="section2 container">
                    <div className="container my-lg-5 my-sm-5">
                        <h1 className="text-center fw-bold">What We Do</h1>
                    </div>
                    <div className="main row">
                        <div className="left col-lg-6 col-sm-12 ps-lg-0">
                            <div className="row text-center">
                                {/* <!-- box-1 --> */}
                                <div
                                    className="box1 col-lg-5 col-md-5 offset-md-1 shadow p-lg-2 mb-lg-3 bg-body rounded py-lg-5 py-sm-4 m-lg-3 my-sm-3">
                                    <i className="fa-solid fa-gears fa-2xl fs-1" style={{ color: "#da9d40" }}></i>
                                    <h3 className="pt-lg-4 pt-sm-4">Integer Pulvinar</h3>
                                    <p className="px-3 text-muted">Integer sit amet mattis quam, sit amet ultricies velit...</p>
                                </div>
                                {/* <!-- box-2 --> */}
                                <div
                                    className="box1 col-lg-5 col-md-5 mx-md-3 shadow p-lg-2 mb-lg-3 bg-body rounded py-lg-5 py-sm-4 m-lg-3 my-sm-3">
                                    <i className="fa fa-headphones fa-2xl fs-1" style={{ color: "#da9d40" }}></i>
                                    <h3 className="pt-lg-4 pt-sm-4">Integer Pulvinar</h3>
                                    <p className="px-3 text-muted">Integer sit amet mattis quam, sit amet ultricies velit...</p>
                                </div>
                                {/* <!-- box-3 --> */}
                                <div
                                    className="box1 col-lg-5 col-md-5 offset-md-1 shadow p-lg-2 mb-lg-3 bg-body rounded py-lg-5 py-sm-4 m-lg-3 my-sm-3">
                                    <i className="fa-regular fa-calendar-days fa-2xl fs-1" style={{ color: "#da9d40" }}></i>
                                    <h3 className="pt-lg-4 pt-sm-4">Integer Pulvinar</h3>
                                    <p className="px-3 text-muted">Integer sit amet mattis quam, sit amet ultricies velit...</p>
                                </div>
                                {/* <!-- box-4 --> */}
                                <div
                                    className="box1 col-lg-5 col-md-5 mx-md-3 shadow p-lg-2 mb-lg-3 bg-body rounded py-lg-5 py-sm-4 m-lg-3 my-sm-3">
                                    <i className="fa fa-cubes fa-2xl fs-1" style={{ color: "#da9d40" }}></i>
                                    <h3 className="pt-lg-4 pt-sm-4">Integer Pulvinar</h3>
                                    <p className="px-3 text-muted">Integer sit amet mattis quam, sit amet ultricies velit...</p>
                                </div>
                            </div>
                        </div>
                        <div className="right col-lg-6 col-sm-12 p-lg-0 p-sm-4 d-flex justify-content-center">
                            <a href="img/man1.jpg" target="_blank" rel="noopener noreferrer"><img className="img-fluid"
                                src="img/man1.jpg" style={{ width: "500px" }}
                            /></a>
                        </div>
                    </div>
                </div>

                {/* <!-- section-3 Container --> */}
                <div className="section3 container-fluid gx-0 pt-5">
                    <div className="overlay">
                        <div className="banner">
                            <div className="container p-lg-5 p-sm-4 py-sm-5 py-lg-5">
                                <div className="row text-light gx-0">
                                    {/* <!-- left part --> */}
                                    <div className="left col-lg-5 col-sm-12 px-lg-2">
                                        <h1 className="">Years In The Field</h1>
                                        <p className="">Integer pulvinar leo id viverra feugiat. Pellentesque libero justo, semper at
                                            tempus vel, ultrices in ligula. Nulla sollicit sed.</p>
                                        <h3 className=""><span className="display-4 fw-bold" style={{ color: "#da9d40" }}>20+</span>Years of
                                            Experience</h3>
                                    </div>

                                    {/* <!-- right part --> */}
                                    <div className="col-lg-7 col-sm-12 pt-lg-0 pt-sm-5">
                                        <div className="right row text-light text-center">
                                            <div className="col-sm-4">
                                                <p className="">Happy Customers</p>
                                                <h1 className="">12k</h1>
                                                <i className="fa fa-users border border-1 rounded-circle bg-light text-dark p-3"></i>
                                            </div>

                                            <div className="col-sm-4">
                                                <p className="">Completed Work</p>
                                                <h1 className="">15k</h1>
                                                <i className="fa fa-tasks border border-1 rounded-circle bg-light text-dark p-3"></i>
                                            </div>

                                            <div className="col-sm-4">
                                                <p className="">Total Tours</p>
                                                <h1 className="">25k</h1>

                                                <i
                                                    className="fa-regular fa-file border border-1 rounded-circle bg-light text-dark p-3"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- section-4 Container --> */}
                <div className="section4 container-fluid" style={{ background: "#f8f9fa" }}>
                    <div className="container">
                        <div className="row text-center pt-5">
                            <h1 className="fw-bold">What People Are Saying</h1>
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="topp col-lg-5 col-sm-11 border border-1 shadow bg-body p-lg-4 m-lg-3 p-sm-4 m-sm-3">
                                {/* <!-- top part --> */}
                                <div className="">
                                    <p className="fst-italic fw-bold text-muted"><i className="fa fa-quote-left fs-1"
                                        style={{ color: "#da9d40" }}></i> Nam libero tempore, cum soluta nobis est eligendi optio
                                        cumque nihil impedit quo minus id quod possimus, omnis voluptas.</p>
                                </div>
                                {/* <!-- bottom part --> */}
                                <div className="d-flex">
                                    <img className="rounded-circle m-3"
                                        src="img/manicon1.jpeg"
                                        alt="round img" width="80px" />
                                    <div className="m-3 align-self-center">
                                        <h6 className="title" style={{ color: "#da9d40" }}>Thomas Carl</h6>
                                        <p className="subtitle">Add Some Description</p>
                                    </div>
                                </div>
                            </div>

                            <div className="botom  col-lg-5 col-sm-11 border border-1 shadow bg-body p-lg-4 m-lg-3 p-sm-4 m-sm-3">
                                {/* <!-- top part --> */}
                                <div className="">
                                    <p className="fst-italic fw-bold text-muted"><i className="fa fa-quote-left fs-1"
                                        style={{ color: "#da9d40" }}></i> Nam libero tempore, cum soluta nobis est eligendi optio
                                        cumque nihil impedit quo minus id quod possimus, omnis voluptas.</p>
                                </div>
                                {/* <!-- bottom part --> */}
                                <div className="d-flex">
                                    <img className="rounded-circle m-3"
                                        src="img/womanicon2.jpeg"
                                        alt="round img" width="80px" />
                                    <div className="m-3 align-self-center">
                                        <h6 className="title" style={{ color: "#da9d40" }}>Adam Ster</h6>
                                        <p className="subtitle">Add Some Description</p>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >

                {/* <!-- section-5 Container --> */}
                <div className="section5 container-fluid gx-0 pt-5" >
                    <div className="overlay">
                        <div className="banner">
                            <div className="container">
                                <div className="main row text-center text-light p-5 gx-0">
                                    <div className="col-12">
                                        <h1 className="py-4">We Are Ready To Work With You</h1>
                                        <p className="text-light">sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem
                                            ipsum dolor sit amet, eiusmod tempor incididunt ut labore et consectetur adipiscing sed
                                            do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet Lorem ipsum</p>
                                        <Link to="/Contact" className="btn btn-warning text-light my-3 p-2 px-3 rounded-0" type="button" style={{ backgroundColor: "#da9d40" }}>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Home