import React from 'react'
import { Link } from 'react-router-dom'
import SubHeader from './SubHeader'

const Services = () => {
    return (
        <div className='Services'>
            
        {/* common header for all pages except HOME page */}
        <SubHeader />


            {/* <!-- section-2 container --> */}
            <div className="section2 container-fluid" style={{ backgroundColor: "#e9ecef" }}>
                <div className="container">
                    <p className="text-muted py-3 px-5 mx-lg-5 mx-sm-0"> <Link to="/Home" style={{ textDecoration: "none", color: "#da9d40" }}> Home</Link> / Our Services</p>
                </div>
            </div>

            {/* <!-- section-3 container --> */}
            <div className="section3 container-fluid">
                <div className="container my-lg-5 my-sm-3">
                    <div className="row text-center py-5 lh-lg">
                        {/* <!-- box-1 --> */}

                        <div className="box1 col-lg-4 col-md-6 col-sm-12">
                            <i className="fa fa-puzzle-piece fa-2xl fs-1" style={{ color: "#da9d40" }}></i>
                            <h3 className="pt-lg-4 pt-sm-4">Natus Doloret</h3>
                            <p className="px-3 text-muted">Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium
                                dolor remque laudantium, totam dolor.</p>
                        </div>
                        {/* <!-- box-2 --> */}

                        <div className="box1 col-lg-4 col-md-6 col-sm-12">
                            <i className="fa-solid fa-gears  fa-2xl fs-1" style={{ color: "#da9d40" }}></i>
                            <h3 className="pt-lg-4 pt-sm-4">Natus Doloret</h3>
                            <p className="px-3 text-muted">Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium
                                dolor remque laudantium, totam dolor.</p>
                        </div>
                        {/* <!-- box-3 --> */}

                        <div className="box1 col-lg-4 col-md-6 col-sm-12">
                            <i className="fa fa-sliders fa-2xl fs-1" style={{ color: "#da9d40" }}></i>
                            <h3 className="pt-lg-4 pt-sm-4">Natus Doloret</h3>
                            <p className="px-3 text-muted">Perspiciatis unde omnis iste natus doloret ipsum volupte ut accusal ntium
                                dolor remque laudantium, totam dolor.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- section-4 gallery container --> */}
            <div className="section4 container-fluid">
                <div className="container px-md-4">
                    <div className="main row mt-5">
                        <div className="left col-md-6 col-sm-12 p-md-0">
                            <div className="overlay ">
                                <h4 className="text-center text-light">TOURS & TRAVELS</h4>
                            </div>
                        </div>
                        <div className="right col-md-6 col-sm-12 p-md-0">
                            <div className="overlay2">
                                <h4 className="text-center text-light">TOURS & TRAVELS</h4>
                            </div>
                            <div className="rightbottom row">
                                <div className="col-md-6 col-sm-12 pe-md-0">
                                    <div className="overlay3">
                                        <h4 className="text-center text-light">TOURS</h4>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 ps-md-0">
                                    <div className="overlay4">
                                        <h4 className="text-center text-light">TRAVELS</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- section-5 container --> */}
            <div className="section5 container-fluid gx-0 pt-5">
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
        </div>
    )
}

export default Services