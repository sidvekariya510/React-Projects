import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'


const ViewProduct = () => {
    const [first, setfirst] = useState([])
    const { productId } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/Destinations/${productId}`).then((response) => {
            setfirst([response.data]);
            console.log(response.data);
            //we used [] to remove an error of map is not a function
        })
    }, [])


    return (
        <>
            {
                first.map((data) => {
                    return (
                        <>
                            <div className="p-5 bg-light h-100">
                                <div className="px-5 mt-3 text-center">
                                    <div className="h3 text-capitalize">
                                        {data.title}
                                    </div>
                                </div>
                                <div className="row text-center">
                                    <img src={data.image} alt="Generic placeholder image" className="col-lg-10 m-auto img-fluid"/>
                                </div>
                                <div className="row price bg-light">
                                    <a className="col-lg-6  px-5 text-start h6 text-decoration-none pt-4 fw-bolder">
                                        $ {data.price}
                                    </a>
                                    <ul className="col-lg-6 px-5 text-end list-inline small pt-4">
                                        <li className="list-inline-item m-0"><i className="fa fa-star text-warning"></i></li>
                                        <li className="list-inline-item m-0"><i className="fa fa-star text-warning"></i></li>
                                        <li className="list-inline-item m-0"><i className="fa fa-star text-warning"></i></li>
                                        <li className="list-inline-item m-0"> <i className="fa fa-star text-secondary"></i></li>
                                    </ul>
                                </div>
                                <div className="p overflow-hidden px-5">
                                    {data.description}
                                </div>
                                <div className="d-flex justify-content-center my-3">
                                    <a className="btn btn-success mx-2" href="#" role="button">Buy now</a>
                                    <a className="btn btn-dark mx-2" href="#" role="button">Add to cart</a>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default ViewProduct