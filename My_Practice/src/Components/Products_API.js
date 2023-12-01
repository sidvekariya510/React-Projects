// what is an API : Application programming interface 
// API is a collection of data.

//fakestoreAPI.com :- for fake API data


//Fetch API : 
// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))


//Bootstrap product list designs
//https://freefrontend.com/bootstrap-product-cards/


import React, { useEffect, useState } from 'react'


const Products_API = () => {

    const [product, setProduct] = useState([])

    //useEffect is mandatory for fetch API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((result) => {
                return (result.json())
            })
            .then((data) => {
                console.log(data)
                setProduct(data)
            })
    }, [])


    return (
        <>
            <div className="container-fluid py-3 ps-5 row">
                {
                    product.map((data) => {
                        return (
                            <ul className="list-group col-xl-4 col-lg-6 col-md-6 col-12">
                                <li className="list-group-item bg-light my-2">
                                    <div className="p-1">
                                        <div className="">
                                            <div className="h5 text-capitalize">{data.category}</div>
                                        </div>
                                        <div className="text-center d-flex align-items-center justify-content-center" style={{ height: "150px" }}>
                                            <img src={data.image} alt="Generic placeholder image" className="p-4" style={{ width: "140px" }} />
                                        </div>
                                        <div className="price d-flex align-items-start justify-content-between p-2">
                                            <a className="h6 text-decoration-none pt-2 fw-bolder">$ {data.price}</a>
                                            <ul className="list-inline small p-2">
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-warning"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-warning"></i></li>
                                                <li className="list-inline-item m-0"><i className="fa fa-star text-warning"></i></li>
                                                <li className="list-inline-item m-0"> <i className="fa fa-star text-secondary"></i></li>
                                            </ul>
                                        </div>
                                        <div className="Description p text-muted overflow-hidden" style={{ height: "110px", padding: "10px 0", fontSize: "13px" }}>{data.description}</div>
                                        <div className="py-3 d-flex justify-content-between">
                                            <a className="btn btn-success" href="#" role="button">Buy now</a>
                                            <a className="btn btn-dark" href="#" role="button">Add to cart</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products_API