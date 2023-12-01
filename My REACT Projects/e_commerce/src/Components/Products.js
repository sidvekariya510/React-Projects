import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <>
      {/* <!-- Start Banner Area --> */}
      <section className="banner-area organic-breadcrumb">
        <div className="container">
          <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
            <div className="col-first">
              <h1>Products</h1>
              <nav className="d-flex align-items-center">
                <Link to={"/Home"}>Home<i className="fa-solid fa-arrow-right-long fa-lg px-3 text-light"></i></Link>
                <a href="#">Products</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Banner Area --> */}
      {/* ============ Bootstrap Slider ============ */}

      {/* <!-- start product Area --> */}
      <section className=" section_gap">

        <div id="carouselExampleControls1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className='carousel_nav'>
              <a className="carousel-control-prev" href="#carouselExampleControls1" role="button" data-slide="prev">
                <img src="img/product/prev.png" className='img-fluid' />
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls1" role="button" data-slide="next">
                <img src="img/product/next.png" className='img-fluid' />
              </a>
            </div>
            <div className="carousel-item active">

              {/* <!-- single product slide -1 --> */}
              <div className="single-product-slider">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                      <div className="section-title">
                        <h1 className=''> Latest Products</h1>
                        <p className='text-muted px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et
                          dolore
                          magna aliqua.</p>
                      </div>

                    </div>
                  </div>
                  <div className="row">
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p1.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">
                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p2.jpg" alt="" />
                        <div className="product-details">
                        <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p3.jpg" alt="" />
                        <div className="product-details">
                        <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">
                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p4.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p5.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p6.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p7.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p8.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="carousel-item">

              {/* <!-- single product slide -2 --> */}
              <div className="single-product-slider">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                      <div className="section-title">
                        <h1 className=''> Upcoming Products</h1>
                        <p className='text-muted px-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                          incididunt ut labore et
                          dolore
                          magna aliqua.</p>
                      </div>

                    </div>
                  </div>
                  <div className="row">
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p1.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p2.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p3.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">
                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p4.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p5.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p6.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p7.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- single product --> */}
                    <div className="col-lg-3 col-md-6">
                      <div className="single-product">
                        <img className="img-fluid" src="img/product/p8.jpg" alt="" />
                        <div className="product-details">
                          <Link className="h6 text-uppercase" to={"/ProductDetails"} >addidas New Hammer sole
                            for Sports person</Link>
                          <div className="price">
                            <h6>$150.00</h6>
                            <h6 className="l-through">$210.00</h6>
                          </div>
                          <div className="prd-bottom">

                            <a href="" className="social-info">
                              <span className="fa-solid fa-briefcase"></span>
                              <p className="hover-text">add to bag</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-regular fa-heart"></span>
                              <p className="hover-text">Wishlist</p>
                            </a>
                            <a href="" className="social-info">
                              <span className="fa-solid fa-rotate"></span>
                              <p className="hover-text">compare</p>
                            </a>
                            <Link to={"/ProductDetails"} href="" className="social-info">
                              <span className="fa-solid fa-info"></span>
                              <p className="hover-text">view more</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
      {/* <!-- end product Area --> */}

    </>
  )
}

export default Products