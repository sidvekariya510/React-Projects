import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
            <footer className="footer-area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>About Us</h6>
                                <p className='text-muted'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                    ut labore dolore
                                    magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>Newsletter</h6>
                                <p className='text-muted'>Stay update with our latest</p>
                                <div className="">
                                    <form target="_blank" novalidate="true" action="#"
                                        method="get" className="">
                                        <div className="d-flex">
                                            <input className="form-control" name="EMAIL" placeholder="Enter Email"
                                                required type="email" />
                                            <a className="click-btn" type='button' href='#' ><i className="fa fa-long-arrow-right text-light"
                                                aria-hidden="true"></i></a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6 className="mb-20">Instagram Feed</h6>
                                <ul className="instafeed d-flex flex-wrap">
                                    <li><img src="img/i1.jpg" alt="" /></li>
                                    <li><img src="img/i2.jpg" alt="" /></li>
                                    <li><img src="img/i3.jpg" alt="" /></li>
                                    <li><img src="img/i4.jpg" alt="" /></li>
                                    <li><img src="img/i5.jpg" alt="" /></li>
                                    <li><img src="img/i6.jpg" alt="" /></li>
                                    <li><img src="img/i7.jpg" alt="" /></li>
                                    <li><img src="img/i8.jpg" alt="" /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h6>Follow Us</h6>
                                <p className='text-muted'>Let us be social</p>
                                <div className="footer-social d-flex align-items-center">
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-dribbble"></i></a>
                                    <a href="#"><i className="fa-brands fa-behance"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                            <p className="footer-text m-0 text-center">
                                <p className='text-muted'>
                                    <a className='px-1 text-uppercase text-warning' href="#">I N F I N I T Y</a>

                                    <img src="img/infinity.png" width={"50vw"} />

                                    Made with <i class="fa-solid fa-heart px-1" style={{ color: "#ff0a3b" }}></i> in India
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer