import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container-fluid p-4 border-top bg-dark">
                <div className="container text-center">
                    <a className='p-3 text-secondary' href="#">Privacy and cookies</a>
                    <a className='p-3 text-secondary' href="#">Help</a>
                    <a className='p-3 text-secondary' href="#">Contact</a>
                    <a className='p-3 text-secondary' href="#">All destinations</a>
                    <a className='p-3 text-secondary' href="#">Careers</a>
                </div>
                <div className="container text-center my-3">
                    <a className='p-3 text-secondary text-decoration-none' href='#'>Copyright © 1996–2023 TravelwithSid.com™. All rights reserved.
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer