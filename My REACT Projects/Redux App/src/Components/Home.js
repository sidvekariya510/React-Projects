import React from 'react'

const Home = (props) => {
    return (
        <>
            <div>
                <div className='add-to-cart'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
                </div>
                <h1>Home Component</h1>
                <div className="cart-wrapper">
                    <div className="img-wrapper item">
                        <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios13-iphone-xs-home-assistive-touch.png" width={100} />
                    </div>
                    <div className="text-wrapper item">
                        <p>
                            I-Phone xs
                        </p>
                        <p>
                            Price: $1000.00
                        </p>
                    </div>
                    <div className="btn-wrapper item">
                        <button onClick={() => { props.addToCartHandler({ price: "$1000", name: "iPhone XS" }) }}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home