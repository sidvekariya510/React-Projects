import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Axios = () => {

  const [first, setfirst] = useState([])

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axios.get("http://localhost:8000/Destinations").then((response) => {
      console.log(response.data);
      setfirst(response.data);
    })
  }

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/Destinations/${id}`).then(() => {
      console.log(id);
      getData();
    })
  }
  return (
    <>
      <div className="m-5 row">
        <h1 className='text-center mb-4 text-light'>AXIOS Project</h1>
        {
          first.map((data, index) => {
            return (
              <>
                <ul className="list-group col-xl-4 col-md-6 col-sm-12">
                  <li className="list-group-item bg-light h-100 my-2">
                    <div className="p-2">
                      <div className="d-flex justify-content-between">
                        <div className="h4 text-capitalize">{data.title}</div>
                        <div className="h4 text-capitalize"><button className='btn text-danger'
                          onClick={() => {
                            onDelete(data.id)
                          }}
                        ><i className="fa-solid fa-xmark"></i></button></div>
                      </div>
                      <Link to={`/ViewProduct/${data.id}`} className="text-center d-flex align-items-center justify-content-center text-decoration-none text-dark" style={{ height: "200px" }}>
                        <img src={data.image} alt="Generic placeholder image" className="p-4" style={{ width: "250px" }} />
                      </Link>
                      <div className="price d-flex align-items-start justify-content-between p-2">
                        <a className="h6 text-decoration-none pt-2 fw-bolder">$ {data.price}</a>
                        <ul className="list-inline small p-2">
                          <li className="list-inline-item m-0"><i className="fa fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"><i className="fa fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"><i className="fa fa-star text-warning"></i></li>
                          <li className="list-inline-item m-0"> <i className="fa fa-star text-secondary"></i></li>
                        </ul>
                      </div>
                      <div className="Description p text-muted overflow-hidden" style={{ height: "110px", padding: "10px 0" }}>{data.description}</div>
                      <div className="py-3 d-flex justify-content-between">
                        <a className="btn btn-success" href="#" role="button">Buy now</a>
                        <a className="btn btn-dark" href="#" role="button">Add to cart</a>
                      </div>
                    </div>

                  </li>
                </ul>
              </>
            )
          })
        }

      </div>
    </>
  )
}

export default Axios


