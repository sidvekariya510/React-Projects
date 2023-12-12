import React from 'react'

const Login = () => {

    return (
        <>
            <div className="Login h-100">
                <div className="login-box">
                    <h2 className='text-center text-light pb-4'>L o g i n</h2>
                    <form>
                        <div className="user-box">
                            <input type="text" required />
                            <label>Username/Email</label>
                        </div>
                        <div className="user-box">
                            <input type="text" required />
                            <label>Password</label>
                        </div>
                        <a href="#">
                            <span className='s1'></span>
                            <span className='s2'></span>
                            <span className='s3'></span>
                            <span className='s4'></span>
                            Submit
                        </a>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login