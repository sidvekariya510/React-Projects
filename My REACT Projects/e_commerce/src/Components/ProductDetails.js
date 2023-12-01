import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const ProductDetails = () => {

    const initialData = 1;
    const [myNum, setMyNum] = useState(initialData)

    return (
        <>
            <div className="ProductDetails">
                {/* <!-- Start Banner Area --> */}
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Product Details Page</h1>
                                <nav className="d-flex align-items-center">
                                    <Link to={"/Home"}>Home<i className="fa-solid fa-arrow-right-long fa-lg px-3 text-light"></i></Link>
                                    <a href="#">Shop<i className="fa-solid fa-arrow-right-long fa-lg px-3 text-light"></i></a>
                                    <a href="#">Product Details</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Banner Area --> */}

                {/* <!--================Single Product Area =================--> */}
                <div className="product_image_area">
                    <div className="container">
                        <div className="row s_product_inner">
                            <div className="col-lg-6">
                                <div className="s_Product_carousel">
                                    <div className="single-prd-item">
                                        <img className="img-fluid" src="img/product/p1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="s_product_text">
                                    <h3>Faded SkyBlu Denim Sneakers</h3>
                                    <h2>$149.99</h2>
                                    <ul className="list">
                                        <li><a className="active" href="#"><span>Category</span> : Footwear</a></li>
                                        <li><a href="#"><span>Availibility</span> : In Stock</a></li>
                                    </ul>
                                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cumque corrupti at id odio voluptates dolore ab quas. Odio delectus perferendis commodi, enim nemo molestias?</p>
                                    <div className="product_count">
                                        <label for="qty">Quantity:</label>
                                        <input type="text" name="qty" id="sst" value={myNum} className="input-text qty" />
                                        <button
                                            onClick={() => { setMyNum(myNum + 1) }}
                                            className="increase items-count" type="button"><i class="fa-solid fa-chevron-up fa-xs"></i></button>
                                        <button onClick={() => { myNum > 1 ? setMyNum(myNum - 1) : setMyNum(1) }}
                                            className="reduced items-count" type="button"><i class="fa-solid fa-chevron-down fa-xs"></i></button>
                                    </div>
                                    <div className="card_area d-flex align-items-center">
                                        <a className="primary-btn" href="#">Add to Cart</a>
                                        <a className="icon_btn" href="#"><i class="fa-regular fa-heart text-white"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--================End Single Product Area =================--> */}

                {/* <!--================Product Description Area =================--> */}
                <section className="product_description_area">
                    <div className="container">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Description</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                                    aria-selected="false">Specification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
                                    aria-selected="false">Reviews</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique neque quod nobis, nemo error amet? Temporibus assumenda voluptas dignissimos eius impedit consectetur illo dicta, qui possimus. Aliquam nostrum at minus officiis sapiente. Eos mollitia rerum laboriosam nostrum ut hic cumque ad corporis ab! Placeat aspernatur eligendi alias dolores, soluta est magni explicabo esse! Libero, eaque qui.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae provident autem culpa eius, voluptatum unde quas officia quis quam. Ipsum quia, asperiores placeat excepturi perspiciatis distinctio ratione repellendus blanditiis natus adipisci? Reiciendis delectus distinctio accusantium!</p>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5>Width</h5>
                                                </td>
                                                <td>
                                                    <h5>128mm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Height</h5>
                                                </td>
                                                <td>
                                                    <h5>508mm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Depth</h5>
                                                </td>
                                                <td>
                                                    <h5>85mm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Weight</h5>
                                                </td>
                                                <td>
                                                    <h5>852gm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Quality checking</h5>
                                                </td>
                                                <td>
                                                    <h5>yes</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Freshness Duration</h5>
                                                </td>
                                                <td>
                                                    <h5>03days</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Box Contents</h5>
                                                </td>
                                                <td>
                                                    <h5>Shoes, Extra pair of Laces, Warranty Card</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="row total_rate">
                                            <div className="col-6">
                                                <div className="box_total">
                                                    <h5>Overall</h5>
                                                    <h4>4.0</h4>
                                                    <h6>(03 Reviews)</h6>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="rating_list">
                                                    <h3>Based on 3 Reviews</h3>
                                                    <ul className="list">
                                                        <li><a href="#">5 Star
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i> 01</a></li>

                                                        <li><a href="#">4 Star <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i> 01</a></li>

                                                        <li><a href="#">3 Star <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i> 01</a></li>

                                                        <li><a href="#">2 Star <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i> 01</a></li>

                                                        <li><a href="#">1 Star <i className="fa fa-star"></i> 01</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review_list">
                                            <div className="review_item">
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img src="img/product/review-1.png" alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>Blake Ruiz</h4>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo</p>
                                            </div>
                                            <div className="review_item">
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img src="img/product/review-2.png" alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>Blake Ruiz</h4>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo</p>
                                            </div>
                                            <div className="review_item">
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img src="img/product/review-3.png" alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>Blake Ruiz</h4>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                        <i className="fa fa-star"></i>
                                                    </div>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                    commodo</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="review_box">
                                            <h4>Add a Review</h4>
                                            <p>Your Rating:</p>
                                            <ul className="list">
                                                <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa fa-star"></i></a></li>
                                                <li><a href="#"><i className="fa fa-star"></i></a></li>
                                            </ul>
                                            <p>Outstanding</p>
                                            <form className="row contact_form" id="contactForm" >
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="name" placeholder="Your Full name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="number" placeholder="Phone Number"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" name="message" rows="1" placeholder="Review" required ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 text-right">
                                                    <button type="submit" value="submit" className="primary-btn">Submit Now</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </section >
                {/* --================End Product Description Area ================= -- */}

                {/* --Start related - product Area-- */}
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
                                                    <h6 class="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div class="single-related-product d-flex">
                                            <a href="#"><img src="img/r6.jpg" alt="" /></a>
                                            <div class="desc">
                                                <a href="#" class="title">Black lace Heels</a>
                                                <div class="price">
                                                    <h6>$189.00</h6>
                                                    <h6 class="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6 mb-20">
                                        <div class="single-related-product d-flex">
                                            <a href="#"><img src="img/r7.jpg" alt="" /></a>
                                            <div class="desc">
                                                <a href="#" class="title">Black lace Heels</a>
                                                <div class="price">
                                                    <h6>$189.00</h6>
                                                    <h6 class="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6">
                                        <div class="single-related-product d-flex">
                                            <a href="#"><img src="img/r9.jpg" alt="" /></a>
                                            <div class="desc">
                                                <a href="#" class="title">Black lace Heels</a>
                                                <div class="price">
                                                    <h6>$189.00</h6>
                                                    <h6 class="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6">
                                        <div class="single-related-product d-flex">
                                            <a href="#"><img src="img/r10.jpg" alt="" /></a>
                                            <div class="desc">
                                                <a href="#" class="title">Black lace Heels</a>
                                                <div class="price">
                                                    <h6>$189.00</h6>
                                                    <h6 class="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6">
                                        <div class="single-related-product d-flex">
                                            <a href="#"><img src="img/r11.jpg" alt="" /></a>
                                            <div class="desc">
                                                <a href="#" class="title">Black lace Heels</a>
                                                <div class="price">
                                                    <h6>$189.00</h6>
                                                    <h6 class="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="ctg-right">
                                    <a href="#" target="_blank">
                                        <img class="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--End related - product Area-- > */}

            </div >
        </>
    )
}

export default ProductDetails