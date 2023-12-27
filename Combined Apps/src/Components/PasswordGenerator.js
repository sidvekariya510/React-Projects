import React, { useState, useEffect, useRef } from 'react'

const PasswordGenerator = () => {

    const [length, setLength] = useState(8)
    const [number, setNumber] = useState(false)
    const [char, setChar] = useState(false)
    const [password, setPassword] = useState("")



    const passwordGenerate = () => {

        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (number) {
            str += "0123456789"
        }

        if (char) {
            str += `!@#$%^&*/_+-=`
        }

        for (let i = 1; i <= length; i++) {
            let character = Math.floor(Math.random() * str.length + 1)
            pass = pass + str.charAt(character)
        }

        setPassword(pass)

    }

    const copyPwdToClip = () => {
        window.navigator.clipboard.writeText(password)
    }

    useEffect(() => {

        passwordGenerate()

    }, [length, number, char])

    const passwordRef = useRef("")

    return (
        <>
            <div className="PasswordGenerator mt-5 border p-5 text-center">
                <div className="container p-5">
                    {/* input field */}
                    <input
                        className='p-3 w-50 bg-white border-0'
                        type="text"
                        value={password}
                        readOnly
                        ref={passwordRef}
                    />
                    {/* copy button */}
                    <button
                        className='p-3 bg-primary text-light border-0 rounded-0'
                        type="submit"
                        onClick={
                            () => {
                                copyPwdToClip()
                            }
                        }
                    >Copy</button>
                    <div className='pt-5'>

                        {/* Range for length */}
                        <input
                            className='range'
                            name="length"
                            type="range"
                            min="5"
                            max="20"
                            value={length}
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label
                            className='px-4 text-warning'
                            htmlFor='length'>Length :
                            <span className='text-light'> {length}</span>
                        </label>
                        <br />
                        <br />
                        {/* checkbox for numbers */}
                        <input
                            className=''
                            type="checkbox"
                            name="num"
                            defaultChecked={number}
                            onChange={() => { setNumber((prev) => !prev) }}
                        />
                        <label
                            className='ps-4 text-warning'
                            htmlFor='num'>Numbers
                        </label>

                        {/* checkbox for characters */}
                        <input
                            className='ms-4 scale-150'
                            type="checkbox"
                            name="char"
                            defaultChecked={char}
                            onChange={() => { setChar((prev) => !prev) }}
                        />
                        <label
                            className='ps-4 text-warning'
                            htmlFor='char'>Characters
                        </label>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordGenerator