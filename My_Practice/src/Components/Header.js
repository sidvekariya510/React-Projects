import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {

    return (
        <>
            <div className="Header">
                <div className='text-md-center text-lg-start d-flex flex-column'>
                    <div className='px-4 py-4'><a className='h3 text-decoration-none text-primary'>{props.logo}</a>
                    </div>

                    <hr className='text-light m-2' />

                    <div className='px-3 d-flex py-4'>
                        <ul className="nav nav-pills list-unstyled flex-column text-start m-0">
                            <li className='nav-item p-2 fs-5 lh-2'><Link className='Link text-light text-decoration-none' to='/PhoneBook'>PhoneBook</Link></li>
                            <li className='nav-item p-2 fs-5 lh-2'><Link className='Link text-light text-decoration-none' to="/Axios">Axios Project</Link></li>
                            <li className='nav-item p-2 fs-5 lh-2'><Link className='Link text-light text-decoration-none' to="/TodoList">TodoList Project</Link></li>
                            <li className='nav-item p-2 fs-5 lh-2'><Link className='Link text-light text-decoration-none' to="/Products_API">Fetch API Task</Link></li>
                            <li className='nav-item p-2 fs-5 lh-2'><Link className='Link text-light text-decoration-none' to="/RCC">React Class</Link></li>
                            <li className='nav-item p-2 fs-5 lh-2'><Link className='Link text-light text-decoration-none' to="/Marksheet">Marksheet Task</Link></li>
                            <li className='p-2 fs-5'><Link className='btn btn-primary text-light w-100' to="/Login">{props.login}</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header