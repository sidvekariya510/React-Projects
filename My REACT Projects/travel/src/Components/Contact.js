import React from 'react'
import { Link } from 'react-router-dom'
import SubHeader from './SubHeader'


const Contact = () => {
  return (
    <>
      <div className='Contact'>
        
        {/* common header for all pages except HOME page */}
        <SubHeader />


        {/* <!-- section-2 container --> */}
        <div className="section2 container-fluid" style={{ backgroundColor: "#e9ecef" }}>
          <div className="container">
            <p className="text-muted py-3 px-5 mx-lg-5 mx-sm-0">
              <Link to="/Home" style={{ textDecoration: "none", color: "#da9d40" }}> Home</Link>
              / Contact Us
            </p>
          </div>
        </div >
        {/* <!-- section-3 container --> */}
        <div className="section3 container-fluid">
          <div className="container">
            <h2 className="text-center p-sm-4">Contact Us</h2>
            <div className="contact-form">
              <form action="#" method="post">
                <div className="row p-lg-5 pb-sm-5">
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <label className="ps-2">YOUR NAME:</label>
                    <input className="form-control" type="text" name="" id="" placeholder="" required />
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <label className="ps-2">PHONE NUMBER:</label>
                    <input className="form-control" type="text" name="" id="" placeholder="" required />
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <label className="ps-2">EMAIL ADDRESS:</label>
                    <input className="form-control" type="email" name="email" id="" placeholder="" required />
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12">
                    <label className="ps-2">SUBJECT:</label>
                    <input className="form-control" type="text" name="subject" id="" placeholder="" required />
                  </div>

                  <div className="">
                    <textarea className="col-sm-12 form-control" name="" id="" cols="" rows="10"></textarea>
                  </div>


                  <div className="col-md-3 col-sm-4 ps-4">
                    <button className="form-control text-light rounded-0" type="submit" value="submit" style={{ backgroundColor: "#da9d40" }}>Submit</button>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- section-5 container --> */}
        <div className="section5 container-fluid">
          <div className="map row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d59533.26497147759!2d72.822296!3d21.1592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1691093387260!5m2!1sen!2sus"
                style={{ width: "100%", height: "350px" }}></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact