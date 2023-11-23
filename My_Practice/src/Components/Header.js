import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {

    const btnAction = () => {
        // document.getElementById('main').style.backgroundColor = "yellow";
        document.body.style.backgroundColor = "lightblue"
    }
    return (
        <>
            <div className='conatainer-fluid text-center bg-black text-light d-flex justify-content-between'>
                <div className='p-3 px-5'><a className='h2 text-decoration-none text-info'>{props.logo}</a></div>
                <div className='px-3 d-flex'>
                    <ul className="list-unstyled d-flex pt-4 m-0">
                        <li className='px-3'><Link className='text-decoration-none text-light' to='/Home'>Home</Link></li>
                        <li className='px-3'><Link className='text-decoration-none text-light' to="/Products_API">Products</Link></li>
                        <li className='px-3'><Link className='text-decoration-none text-light' to="/TodoList">TodoList</Link></li>
                        <li className='px-3'><Link className='text-decoration-none text-light' to="/About">About</Link></li>
                        <li className='px-3'><Link className='text-decoration-none text-light' to="/Marksheet">Marksheet</Link></li>
                    </ul>
                </div>
                <button id='btn' className='btn btn-light text-black border-0 m-3' onClick={() => {
                    btnAction()
                }}>{props.login}</button>
            </div>
        </>
    )
}

export default Header