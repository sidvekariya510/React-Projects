import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <div className='contact'>
                {/* <!-- Start Banner Area --> */}
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Contact Us</h1>
                                <nav className="d-flex align-items-center">
                                    <Link to={"/Home"}>Home<i className="fa-solid fa-arrow-right-long fa-lg px-3 text-light"></i></Link>
                                    <a href="#">Contact</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Banner Area --> */}

                {/* <!--================Contact Area =================--> */}
                <section className="contact_area my-5 py-5">
                    <div className="container">
                        <div class="map row my-4">
                            <div class="col-12">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d96792.61072525445!2d-74.152285!3d40.701083!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1699102408930!5m2!1sen!2sus" width="100%" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="contact_info">
                                    <div className="info_item">
                                        <i className="fa-solid fa-house px-3"></i>
                                        <span className='h6 fw-bold'>California, United States</span>
                                        <p className='ps-5 text-muted'>Santa monica bullevard</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="fa-solid fa-phone px-3"></i>
                                        <span className='h6 fw-bold'><a className='text-dark' href="#">00 (440) 9865 562</a></span>
                                        <p className='ps-5 text-muted'>Mon to Fri 9am to 6 pm</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="fa-solid fa-envelope px-3"></i>
                                        <span className='h6 fw-bold'><a className='text-dark' href="#">support@colorlib.com</a></span>
                                        <p className='ps-5 text-muted'>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <form className="row contact_form" action="#" method="post" id="contactForm" novalidate="novalidate">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <button type="submit" value="submit" className="primary-btn text-uppercase py-3 px-5 h6" style={{ backgroundColor: "#ffba00" }}>Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--================Contact Area =================--> */}
            </div>
        </>
    )
}

export default Contact