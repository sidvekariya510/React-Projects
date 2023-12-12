import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {

    return (
        <>
            <div className='Header' >
                {/* <!-- Start Header Area --> */}
                <header className="header_area scrollHead">
                    <div className="main_menu">
                        <nav className="navbar navbar-expand-lg navbar-light main_box">
                            <div className="container">
                                <a className="navbar-brand py-sm-2 pe-sm-5 fw-bold text-muted" href="#"><img className='p-2 pe-3' src="img/infinityyellow.png" width="95vw" alt="" />I N F I N I T Y</a>
                                <button className="navbar-toggler btn border-0" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="fa-solid fa-bars-staggered text-dark"></i>
                                </button>

                                <div className="row collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul className="col-lg-10 nav navbar-nav menu_nav d-flex justify-content-end px-4">
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/Home"}>Home</Link>
                                        </li>
                                        <li className="nav-item submenu dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                                aria-haspopup="true" aria-expanded="false">Shop</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a className="nav-link" href="#">Shop Category</a></li>
                                                <li className="nav-item"><Link className="nav-link" to={"/ProductDetails"}>Product
                                                    Details</Link></li>
                                                <li className="nav-item"><a className="nav-link" href="#">Product Checkout</a>
                                                </li>
                                                <li className="nav-item"><a className="nav-link" href="#">Shopping Cart</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#">Confirmation</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/Products"}>Products</Link>
                                        </li>
                                        <li className="nav-item submenu dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                                aria-haspopup="true" aria-expanded="false">Pages</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item"><a className="nav-link" href="#">Option</a></li>
                                                <li className="nav-item"><a className="nav-link" href="#">Option</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={"/Contact"}>Contact</Link>
                                        </li>
                                    </ul>
                                    <ul className="col-lg-2 p-0 nav navbar-nav navbar-right">
                                        <li className="nav-item">
                                            <Link to={"/Cart"} className="cart"><i class="fa-solid fa-cart-shopping" style={{ color: "#000000" }}></i></Link></li>
                                        <li className="nav-item">
                                            <a href="#" className="search">
                                                <i class="fa-solid fa-arrow-right-to-bracket" style={{ color: "#000000" }}></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* <!-- End Header Area --> */}
            </div >
        </>
    )
}

export default Header