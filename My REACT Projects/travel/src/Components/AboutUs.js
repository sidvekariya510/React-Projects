import React from 'react'
import { Link } from 'react-router-dom'
import SubHeader from './SubHeader'


const AboutUs = () => {
  return (
    <>
      <div className="AboutUs">

        {/* common header for all pages except HOME page */}
        <SubHeader />


        {/* <!-- section-2 container --> */}
        <div className="section2 container-fluid" style={{ backgroundColor: "#e9ecef" }}>
          <div className="container">
            <p className="text-muted py-3 px-5 mx-lg-5 mx-sm-0">
              <Link to="/Home" style={{ textDecoration: "none", color: "#da9d40" }}> Home</Link>
              / About Us
            </p>
          </div>
        </div >

        {/* <!-- section-3 container --> */}
        <div div className="section3 container-fluid" >
          <div className="container">
            <div className="row p-2">
              <div className="main col-lg-6 col-sm-12 p-5 lh-lg align-content-center">
                <h4 className="lh-lg" style={{ letterSpacing: "1px" }}>
                  Sed Ut Perspiciatis Unde Omnis
                </h4>
                <h5 className="fw-light text-capitalize fs-4" style={{ letterSpacing: "3px" }}>
                  VOLUPTATEM UT ACCUSA !
                </h5>
                <p className="text-muted" style={{ letterSpacing: "1px" }}>
                  Sed ut perspiciatis unde omnis iste natus error ipsum voluptatem
                  ut accusa ntium dolor remque laudantium, totam rem aperiam, eaque
                  ipsa quae abse illo quasi sed architecto beatae vitae dicta sut
                  dolor etr explicabo. Morbi a luctus magna, eu rutrum turpis. Sed
                  perspi ciatis unde error ipsum voluptatem.
                </p>
              </div>
              <div className="col-lg-6 col-sm-12 py-5">
                <img src="img/dusk.jpg"
                  alt="" width="100%" />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- section-4 container --> */}
        <div div className="section4 container-fluid gx-0 pt-4" >
          <div className="overlay">
            <div className="banner">
              <div className="container text-center w-75 lh-lg">
                <div className="main row text-light p-5 gx-0">
                  <div className="sub col-11 mx-4 px-0">
                    <h1 className="fw-light display-4 py-4">
                      Get Flat 20% Offer On Tours
                    </h1>
                    <p className="fs-5" style={{ color: "#bbb" }}>
                      Sed ut perspiciatis unde omnis iste natus error ipsum
                      voluptatem ut accusa ntium dolor remque et laudantium, totam
                      rem aperiam, eaque ipsa quae abse illo quasi sed.
                    </p>
                    <Link to="/Home" className="btn fs-5 rounded-0 text-light my-4 p-2 px-4" type="button"
                      style={{ backgroundColor: "#da9d40" }}>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- section-5 container --> */}
        <div div className="section5 container-fluid" >
          <div className="container text-center pb-5 m-auto w-100">
            <div className="row">
              <div className="col-12 p-5">
                <h1 className="fw-bold">Our Agents</h1>
              </div>
            </div>
            <div className="row px-lg-0 px-sm-5">
              <div className="col-lg-3 col-sm-6 p-sm-4">
                <a href="img/agent1.jpg" target="_blank" rel="noopener noreferrer"><img className="img-thumbnail"
                  src="img/agent1.jpg"
                  alt="agent1" /></a>
              </div>
              <div className="col-lg-3 col-sm-6 p-sm-4">
                <a href="img/agent2.jpg" target="_blank" rel="noopener noreferrer"><img className="img-thumbnail"
                  src="img/agent2.jpg"
                  alt="agent2" /></a>
              </div>
              <div className="col-lg-3 col-sm-6 p-sm-4">
                <a href="img/agent3.jpg" target="_blank" rel="noopener noreferrer"><img className="img-thumbnail"
                  src="img/agent3.jpg"
                  alt="agent3" /></a>
              </div>
              <div className="col-lg-3 col-sm-6 p-sm-4">
                <a href="img/woman4.jpg" target="_blank" rel="noopener noreferrer"><img className="img-thumbnail"
                  src="img/woman4.jpg"
                  alt="agent4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs