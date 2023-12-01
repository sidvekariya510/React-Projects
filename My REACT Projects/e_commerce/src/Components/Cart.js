import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Cart = () => {

    const [myNum, setMyNum] = useState(1);
    const [myNum2, setMyNum2] = useState(1);
    const [myNum3, setMyNum3] = useState(1);

    if (document.getElementById("price") != null) {
        var Price = document.getElementById("price").innerHTML;

    }

    if (document.getElementById("price2") != null) {
        var Price2 = document.getElementById("price2").innerHTML;

    }

    if (document.getElementById("price3") != null) {
        var Price3 = document.getElementById("price3").innerHTML;

    }

    let Total = myNum * parseFloat(Price);
    let Total2 = myNum2 * parseFloat(Price2);
    let Total3 = myNum3 * parseFloat(Price3);


    return (
        <>
            {/* <!-- Start Banner Area --> */}
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Shopping Cart</h1>
                            <nav className="d-flex align-items-center">
                                <Link to={"/Home"}>Home<i className="fa-solid fa-arrow-right-long fa-lg px-3 text-light"></i></Link>
                                <a href="#">Cart</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Banner Area --> */}


            {/* <!--================Cart Area =================--> */}

            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Product 1 */}
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <Link to={"/ProductDetails"}>
                                                        <img src="img/product/p1.jpg" alt="" width={"200px"} />
                                                    </Link>
                                                </div>
                                                <div className="media-body">
                                                    <p>Faded SkyBlu Denim Sneakers</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$<span id='price'>149.99</span></h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <label for="qty">Quantity:</label>
                                                <input type="text" name="qty" id="sst" value={myNum} className="input-text qty" />
                                                <button
                                                    onClick={() => { setMyNum(myNum + 1) }}
                                                    className="increase items-count" type="button"><i class="fa-solid fa-chevron-up fa-xs"></i></button>
                                                <button onClick={() => {
                                                    myNum > 1 ? setMyNum(myNum - 1) : setMyNum(1)
                                                }}
                                                    className="reduced items-count" type="button"><i class="fa-solid fa-chevron-down fa-xs"></i></button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>${Total}</h5>
                                        </td>
                                    </tr>

                                    {/* Product 2 */}
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <Link to={"/ProductDetails"}>
                                                        <img src="img/product/p2.jpg" alt="" width={"200px"} />
                                                    </Link>
                                                </div>
                                                <div className="media-body">
                                                    <p>White & Yellow sole Black Sneakers</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$<span id='price2'>249.99</span></h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <label for="qty">Quantity:</label>
                                                <input type="text" name="qty" id="sst" value={myNum2} className="input-text qty" />
                                                <button
                                                    onClick={() => { setMyNum2(myNum2 + 1) }}
                                                    className="increase items-count" type="button"><i class="fa-solid fa-chevron-up fa-xs"></i></button>
                                                <button onClick={() => {
                                                    myNum2 > 1 ? setMyNum2(myNum2 - 1) : setMyNum(1)
                                                }}
                                                    className="reduced items-count" type="button"><i class="fa-solid fa-chevron-down fa-xs"></i></button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>${Total2}</h5>
                                        </td>
                                    </tr>

                                    {/* Product 3 */}
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <Link to={"/ProductDetails"}>
                                                        <img src="img/product/p3.jpg" alt="" width={"200px"} />
                                                    </Link>
                                                </div>
                                                <div className="media-body">
                                                    <p>Pink Low-top Sneakers</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$<span id='price3'>199.99</span></h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                                                <label for="qty">Quantity:</label>
                                                <input type="text" name="qty" id="sst" value={myNum3} className="input-text qty" />
                                                <button
                                                    onClick={() => { setMyNum3(myNum3 + 1) }}
                                                    className="increase items-count" type="button"><i class="fa-solid fa-chevron-up fa-xs"></i></button>
                                                <button onClick={() => {
                                                    myNum > 1 ? setMyNum3(myNum3 - 1) : setMyNum3(1)
                                                }}
                                                    className="reduced items-count" type="button"><i class="fa-solid fa-chevron-down fa-xs"></i></button>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>${Total3}</h5>
                                        </td>
                                    </tr>
                                    <tr className="bottom_button">
                                        <td>
                                            <a className="gray_btn" href="#">Update Cart</a>
                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <div className="cupon_text d-flex align-items-center">
                                                <input type="text" placeholder="Coupon Code" />
                                                <a className="primary-btn" href="#">Apply</a>
                                                <a className="gray_btn" href="#">Close Coupon</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>$2160.00</h5>
                                        </td>
                                    </tr>
                                    <tr className="shipping_area">
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <h5>Shipping</h5>
                                        </td>
                                        <td>
                                            <div className="shipping_box">
                                                <ul className="list">
                                                    <li><a href="">Flat Rate: $5.00</a></li>
                                                    <li><a href="">Free Shipping</a></li>
                                                    <li><a href="">Flat Rate: $10.00</a></li>
                                                    <li className="active"><a href="#">Local Delivery: $2.00</a></li>
                                                </ul>
                                                <h6>Calculate Shipping <i className="fa fa-caret-down" aria-hidden="true"></i></h6>
                                                <select className="shipping_select">
                                                    <option value="1">Bangladesh</option>
                                                    <option value="2">India</option>
                                                    <option value="4">Pakistan</option>
                                                </select>
                                                <select className="shipping_select">
                                                    <option value="1">Select a State</option>
                                                    <option value="2">Select a State</option>
                                                    <option value="4">Select a State</option>
                                                </select>
                                                <input type="text" placeholder="Postcode/Zipcode" />
                                                <a className="gray_btn" href="#">Update Details</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="out_button_area">
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <div className="checkout_btn_inner d-flex align-items-center">
                                                <a className="gray_btn" href="#">Continue Shopping</a>
                                                <a className="primary-btn" href="#">Proceed to checkout</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================End Cart Area =================--> */}
        </>
    )
}

export default Cart