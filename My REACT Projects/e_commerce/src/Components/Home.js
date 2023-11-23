import React from 'react'

const Home = () => {
    return (
        <>
            {/* <!-- start banner Area --> */}
            <section className="home-banner-area">
                <div className="container-fluid px-5">
                    <div className="row fullscreen align-items-center justify-content-start">
                        <div className="col-lg-10 m-auto">

                            {/* Bootstrap carousel */}

                            <div id="carouselExampleControls0" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">

                                        {/* <!-- single-slide --> */}
                                        <div className="row align-items-center d-flex">
                                            <div className="col-lg-5 col-md-6">
                                                <div className="banner-content">
                                                    <h1 className='fw-bold'>Nike New <br />Collection!</h1>
                                                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                    <div className="add-bag d-flex align-items-center">
                                                        <a className="add-btn" href=""><i class="fa-solid fa-plus"></i></a>
                                                        <span className="add-text text-uppercase">Add to Bag</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="banner-img">
                                                    <img className="img-fluid" src="img/banner/banner-img.png" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='carousel_nav0'>
                                        <a className="carousel-control-prev" href="#carouselExampleControls0" role="button" data-slide="prev">
                                            <img src="img/product/prev.png" className='prev' />
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls0" role="button" data-slide="next">
                                            <img src="img/product/next.png" className='next' />
                                        </a>
                                    </div>
                                    <div className="carousel-item">

                                        {/* <!-- single-slide --> */}
                                        <div className="row align-items-center d-flex">
                                            <div className="col-lg-5 col-md-6">
                                                <div className="banner-content">
                                                    <h1 className='fw-bold'>Nike New <br />Collection!</h1>
                                                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                        incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                                    <div className="add-bag d-flex align-items-center">
                                                        <a className="add-btn" href=""><i class="fa-solid fa-plus"></i></a>
                                                        <span className="add-text text-uppercase">Add to Bag</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="banner-img">
                                                    <img className="img-fluid" src="img/banner/banner-img2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section >
            {/* <!-- End banner Area --> */}

            {/* <!-- start features Area --> */}
            <section className="features-area section_gap">
                <div className="container">
                    <div className="row features-inner bg-light">
                        {/* <!-- single features --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="img/features/f-icon1.png" alt="" />
                                </div>
                                <h6>Free Delivery</h6>
                                <p className='text-muted'>Free Shipping on all order</p>
                            </div>
                        </div>
                        {/* <!-- single features --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="img/features/f-icon2.png" alt="" />
                                </div>
                                <h6>Return Policy</h6>
                                <p className='text-muted'>Free Shipping on all order</p>
                            </div>
                        </div>
                        {/* <!-- single features --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="img/features/f-icon3.png" alt="" />
                                </div>
                                <h6>24/7 Support</h6>
                                <p className='text-muted'>Free Shipping on all order</p>
                            </div>
                        </div>
                        {/* <!-- single features --> */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-features">
                                <div className="f-icon">
                                    <img src="img/features/f-icon4.png" alt="" />
                                </div>
                                <h6>Secure Payment</h6>
                                <p className='text-muted'>Free Shipping on all order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- end features Area --> */}

            {/* <!-- Start category Area --> */}
            <section className="category-area">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-8 col-md-8">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="img/category/c1.jpg" alt="" />
                                        <a href="img/category/c1.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Sneaker for Sports</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="img/category/c2.jpg" alt="" />
                                        <a href="img/category/c2.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Sneaker for Sports</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="img/category/c3.jpg" alt="" />
                                        <a href="img/category/c3.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Product for Couple</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="single-deal">
                                        <div className="overlay"></div>
                                        <img className="img-fluid w-100" src="img/category/c4.jpg" alt="" />
                                        <a href="img/category/c4.jpg" className="img-pop-up" target="_blank">
                                            <div className="deal-details">
                                                <h6 className="deal-title">Sneaker for Sports</h6>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-deal">
                                <div className="overlay"></div>
                                <img className="img-fluid w-100" src="img/category/c5.jpg" alt="" />
                                <a href="img/category/c5.jpg" className="img-pop-up" target="_blank">
                                    <div className="deal-details">
                                        <h6 className="deal-title">Sneaker for Sports</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End category Area --> */}



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
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p2.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p3.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p4.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p5.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p6.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p7.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p8.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
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
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p2.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p3.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p4.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p5.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p6.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p7.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single product --> */}
                                        <div className="col-lg-3 col-md-6">
                                            <div className="single-product">
                                                <img className="img-fluid" src="img/product/p8.jpg" alt="" />
                                                <div className="product-details">
                                                    <h6>addidas New Hammer sole
                                                        for Sports person</h6>
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
                                                        <a href="" className="social-info">
                                                            <span className="fa-solid fa-info"></span>
                                                            <p className="hover-text">view more</p>
                                                        </a>
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




            {/* <!-- Start exclusive deal Area --> */}
            <section className="exclusive-deal-area">
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 no-padding exclusive-left">
                            <div className="row clock_sec clockdiv" id="clockdiv">
                                <div className="col-lg-12">
                                    <h1>Exclusive Hot Deal Ends Soon!</h1>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="row clock-wrap">
                                        <div className="col clockinner1 clockinner">
                                            <h1 className="days">150</h1>
                                            <span className="smalltext">Days</span>
                                        </div>
                                        <div className="col clockinner clockinner1">
                                            <h1 className="hours">23</h1>
                                            <span className="smalltext">Hours</span>
                                        </div>
                                        <div className="col clockinner clockinner1">
                                            <h1 className="minutes">47</h1>
                                            <span className="smalltext">Mins</span>
                                        </div>
                                        <div className="col clockinner clockinner1">
                                            <h1 className="seconds">59</h1>
                                            <span className="smalltext">Secs</span>
                                        </div>
                                    </div>
                                    <a href="#" type='button' className="shopNow btn px-3 py-2 mt-5 text-light">Shop Now</a>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-6 no-padding exclusive-right">

                            {/* Bootstrap carousel navbar */}
                            <div className='carousel_nav2'>
                                <a className="carousel-control-prev" href="#carouselExampleControls2" role="button" data-slide="prev">
                                    <img src="img/product/prev.png" className='img-fluid' />
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls2" role="button" data-slide="next">
                                    <img src="img/product/next.png" className='img-fluid' />
                                </a>
                            </div>


                            <div className="active-exclusive-product-slider">

                                {/* Bootstrap carousel */}
                                <div id="carouselExampleControls2" className="carousel slide " data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">

                                            {/* <!-- single exclusive carousel slide-1--> */}
                                            <div className="single-exclusive-slider">
                                                <img className="img-fluid" src="img/product/e-p1.png" alt="" />

                                                <div className="product-details">
                                                    <div className="price">
                                                        <h6>$150.00</h6>
                                                        <h6 className="l-through">$210.00</h6>
                                                    </div>
                                                    <h4>Converse Superhero Fashion Sneakers for Men</h4>
                                                    <div className="add-bag d-flex align-items-center justify-content-center">
                                                        <a className="add-btn" href=""><span class="fa-solid fa-briefcase"></span></a>
                                                        <span className="add-text text-uppercase">Add to Bag</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="carousel-item">

                                            {/* <!-- single exclusive carousel slide-2 --> */}
                                            <div className="single-exclusive-slider">
                                                <img className="img-fluid" src="img/product/e-p2.png" alt="" />
                                                <div className="product-details">
                                                    <div className="price">
                                                        <h6>$190.00</h6>
                                                        <h6 className="l-through">$260.00</h6>
                                                    </div>
                                                    <h4>Nike LeBron Soldier 9 Oregon Ducks</h4>
                                                    <div className="add-bag d-flex align-items-center justify-content-center">
                                                        <a className="add-btn" href=""><span class="fa-solid fa-briefcase"></span></a>
                                                        <span className="add-text text-uppercase">Add to Bag</span>
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
            </section >
            {/* <!-- End exclusive deal Area --> */}

            {/* <!-- Start brand Area --> */}
            <section className="brand-area section_gap">
                <div className="container">
                    <div className="row">
                        <a className="col single-img" href="#">
                            <img className="img-fluid d-block mx-auto" src="img/brand/1.png" alt="" />
                        </a>
                        <a className="col single-img" href="#">
                            <img className="img-fluid d-block mx-auto" src="img/brand/2.png" alt="" />
                        </a>
                        <a className="col single-img" href="#">
                            <img className="img-fluid d-block mx-auto" src="img/brand/3.png" alt="" />
                        </a>
                        <a className="col single-img" href="#">
                            <img className="img-fluid d-block mx-auto" src="img/brand/4.png" alt="" />
                        </a>
                        <a className="col single-img" href="#">
                            <img className="img-fluid d-block mx-auto" src="img/brand/5.png" alt="" />
                        </a>
                    </div>
                </div>
            </section>
            {/* <!-- End brand Area --> */}

            {/* <!-- Start related-product Area --> */}
            <section className="related-product-area section_gap_bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h1>Deals of the Week</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <div className="single-related-product d-flex">
                                        <a href="#"><img src="img/r1.jpg" alt="" /></a>
                                        <div className="desc">
                                            <a href="#" className="title">Black lace Heels</a>
                                            <div className="price">
                                                <h6>$189.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <div className="single-related-product d-flex">
                                        <a href="#"><img src="img/r2.jpg" alt="" /></a>
                                        <div className="desc">
                                            <a href="#" className="title">Black lace Heels</a>
                                            <div className="price">
                                                <h6>$189.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <div className="single-related-product d-flex">
                                        <a href="#"><img src="img/r3.jpg" alt="" /></a>
                                        <div className="desc">
                                            <a href="#" className="title">Black lace Heels</a>
                                            <div className="price">
                                                <h6>$189.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <div className="single-related-product d-flex">
                                        <a href="#"><img src="img/r5.jpg" alt="" /></a>
                                        <div className="desc">
                                            <a href="#" className="title">Black lace Heels</a>
                                            <div className="price">
                                                <h6>$189.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <div className="single-related-product d-flex">
                                        <a href="#"><img src="img/r6.jpg" alt="" /></a>
                                        <div className="desc">
                                            <a href="#" className="title">Black lace Heels</a>
                                            <div className="price">
                                                <h6>$189.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                    <div className="single-related-product d-flex">
                                        <a href="#"><img src="img/r7.jpg" alt="" /></a>
                                        <div className="desc">
                                            <a href="#" className="title">Black lace Heels</a>
                                            <div className="price">
                                                <h6>$189.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-related-product d-flex">
                                        <a href="#"><img src="img/r9.jpg" alt="" /></a>
                                        <div className="desc">
                                            <a href="#" className="title">Black lace Heels</a>
                                            <div className="price">
                                                <h6>$189.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-related-product d-flex">
                                        <a href="#"><img src="img/r10.jpg" alt="" /></a>
                                        <div className="desc">
                                            <a href="#" className="title">Black lace Heels</a>
                                            <div className="price">
                                                <h6>$189.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-related-product d-flex">
                                        <a href="#"><img src="img/r11.jpg" alt="" /></a>
                                        <div className="desc">
                                            <a href="#" className="title">Black lace Heels</a>
                                            <div className="price">
                                                <h6>$189.00</h6>
                                                <h6 className="l-through">$210.00</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="ctg-right">
                                <a href="#" target="_blank">
                                    <img className="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End related-product Area --> */}


        </>
    )
}

export default Home