import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="Footer">
                {/* <!-- section-6 Container --> */}
                <div className="section6 container-fluid" >
                    <div className="container">
                        <div className="row text-center py-5">
                            <div className="col-12 pb-5">
                                <h1 className="fw-bold">Newsletter</h1>
                            </div>
                            <div className="col-lg-5 offset-lg-1 col-sm-12 text-start">
                                <p className="para fs-4">Duis nisi sapien, elementum finibus fermentum eget, aliquet a leo.</p>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <form className="row my-lg-0 my-sm-3">
                                    <div className="col-6 offset-1">
                                        <input className="email fs-4"
                                            style={{ borderBottom: "2px solid black", borderTop: "none", borderLeft: "none", borderRight: "none" }}
                                            type="text" name="email" id="" placeholder="Enter your Email" />

                                    </div>
                                    <div className="col-4">
                                        <input className="subscribe btn btn-warning btn-sm text-light py-lg-2 px-lg-3 py-sm-2 px-sm-5"
                                            style={{ backgroundColor: "#da9d40" }} type="button" value="Subscribe" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- section-7 Container --> */}
                <div className="section7 container-fluid gx-0" >
                    <div className="overlay">
                        <div className="container">
                            <div className="footer row text-light py-5 px-3">
                                <div className="foothead col-lg-4 col-sm-12 text-lg-start text-sm-center">
                                    <h1 className="display-6 fw-bold">Get In Touch with us</h1>
                                </div>
                                <div className="footicons col-lg-8 fs-5">
                                    <p className="d-flex justify-content-lg-end justify-content-sm-center pt-2">
                                        <a href=""><i className="fa-brands fa-facebook-f text-muted ps-4"></i></a>
                                        <a href=""><i className="fa-brands fa-twitter text-muted ps-4"></i></a>
                                        <a href=""><i className="fa-brands fa-google-plus-g text-muted ps-4"></i></a>
                                        <a href=""><i className="fa-brands fa-instagram text-muted ps-4"></i></a>
                                    </p>
                                    <li
                                        className="footlinks list-unstyled d-flex justify-content-lg-end justify-content-sm-center pt-2">
                                        <Link className="home text-decoration-none text-muted" to='/Home'>Home</Link>
                                        <Link className="text-decoration-none ps-3 text-muted" to='/AboutUs'>About Us</Link>
                                        <Link className="text-decoration-none ps-3 text-muted" to='/Services'>Services</Link>
                                        <Link className="text-decoration-none ps-3 text-muted" to='/Gallery'>Gallery</Link>
                                        <a className="text-decoration-none ps-3 text-muted" >Subscribe</a>
                                        <Link className="text-decoration-none ps-3 text-muted" to='/Contact'>Contact</Link>
                                    </li>
                                </div>
                                <hr className=" text-light my-4" />
                                <div className="footerbottom col-12 text-center text-muted">
                                    <p className="">
                                        © 2023 Commute. All rights reserved | Design by <a href="https://github.com/sidvekariya510"
                                            className="text-light text-decoration-none">Siddharth.V</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer