import React from 'react'
import { Link } from 'react-router-dom'
import SubHeader from './SubHeader'

const Gallery = () => {
  return (
    <>
    
        {/* common header for all pages except HOME page */}
        <SubHeader />


      {/* <!-- section-2 container --> */}
      <div className="section2 container-fluid" style={{ backgroundColor: "#e9ecef" }}>
        <div className="container">
          <p className="text-muted py-3 px-5 mx-lg-5 mx-sm-0">
            <Link to="/Home" style={{ textDecoration: "none", color: "#da9d40" }}> Home</Link>
            / Gallery
          </p>
        </div>
      </div >
      {/* <!-- section-3 container --> */}
      <div className="section3 container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center p-5">
              <h1 className="">Our Gallery</h1>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-1"><img className="img-fluid" style={{ width: "100%", minHeight: "200px" }}
              src="img/landscape.jpg"
              alt="" />
              <h5 className="text-uppercase pt-2">Vulputater act</h5>
              <p className="text-muted pb-3">Nullam dui mi, vulputater act metus dolor sit amet.</p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-1"><img className="img-fluid" style={{ width: "100%", minHeight: "200px" }}
              src="img/leaves.jpg"
              alt="" />
              <h5 className="text-uppercase pt-2">Vulputater act</h5>
              <p className="text-muted pb-3">Nullam dui mi, vulputater act metus dolor sit amet.</p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-1"><img className="img-fluid" style={{ width: "100%", minHeight: "200px" }}
              src="img/7stones.jpg"
              alt="" />
              <h5 className="text-uppercase pt-2">Vulputater act</h5>
              <p className="text-muted pb-3">Nullam dui mi, vulputater act metus dolor sit amet.</p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-1"><img className="img-fluid" style={{ width: "100%", minHeight: "200px" }}
              src="img/bench.jpg"
              alt="" />
              <h5 className="text-uppercase pt-2">Vulputater act</h5>
              <p className="text-muted pb-3">Nullam dui mi, vulputater act metus dolor sit amet.</p>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 p-1"><img className="img-fluid" style={{ width: "100%", minHeight: "200px" }}
              src="img/longexpo.jpg"
              alt="" />
              <h5 className="text-uppercase pt-2">Vulputater act</h5>
              <p className="text-muted pb-3">Nullam dui mi, vulputater act metus dolor sit amet.</p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-1"><img className="img-fluid" style={{ width: "100%", minHeight: "200px" }}
              src="img/landscape.jpg"
              alt="" />
              <h5 className="text-uppercase pt-2">Vulputater act</h5>
              <p className="text-muted pb-3">Nullam dui mi, vulputater act metus dolor sit amet.</p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-1"><img className="img-fluid" style={{ width: "100%", minHeight: "200px" }}
              src="img/dusk.jpg"
              alt="" />
              <h5 className="text-uppercase pt-2">Vulputater act</h5>
              <p className="text-muted pb-3">Nullam dui mi, vulputater act metus dolor sit amet.</p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 p-1"><img className="img-fluid" style={{ width: "100%", minHeight: "200px" }}
              src="img/lighttrail.jpg"
              alt="" />
              <h5 className="text-uppercase pt-2">Vulputater act</h5>
              <p className="text-muted pb-3">Nullam dui mi, vulputater act metus dolor sit amet.</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Gallery