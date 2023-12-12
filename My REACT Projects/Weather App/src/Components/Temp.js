// https://api.openweathermap.org/data/2.5/weather?q=surat&appid=9a8259c19f8c7f6d7f6f265ac01b9eb5


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Style.css'

const Temp = () => {

    const [searchValue, setSearchValue] = useState('surat');
    const [date, setDate] = useState('')
    const [apidata, setApiData] = useState([])

    const getWeatherInfo = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=9a8259c19f8c7f6d7f6f265ac01b9eb5`
        axios.get(url).then((response) => {
            setApiData([response.data])
            console.log(response.data);
            setDate(new Date(response.data.sys.sunset * 1000))
            // console.log(new Date(response.data.dt * 1000).toDateString());
        })

    }

    useEffect(() => {
        getWeatherInfo();
    }, [])


    return (
        <>
            <div>
                {
                    apidata.map((data) => {
                        return (
                            <>
                                <>
                                    <div className="main container-fluid">
                                        <div className="wrap">
                                            <div className="search row g-0 pb-4 pb-lg-0">
                                                <input className='searchTerm col-sm-8 col-12'
                                                    type="search"
                                                    placeholder='Search by city name...'
                                                    autoFocus
                                                    id='search'
                                                    value={searchValue}
                                                    onChange={(e) => setSearchValue(e.target.value)}
                                                />
                                                <button className="searchButton col-sm-4 col-12" type='button' onClick={getWeatherInfo}>Search</button>
                                            </div>
                                        </div>


                                        <div className='main-container'>
                                            <div className="widget-container">
                                                {/* ----------------TOP--------------- */}
                                                <div className="top">
                                                    <div className="sun">
                                                        <img className="sun" src="/images/sunny.png" />
                                                    </div>
                                                    <div className="cloud">
                                                        <img src="/images/cloud.png" alt="" />
                                                    </div>
                                                </div>
                                                {/* ----------------MIDDLE--------------- */}
                                                <div className="middleContainer row g-0">
                                                    <div className="midLeft col-sm-7 col-12 d-flex justify-content-center align-items-center col-8">
                                                        <div className="lft col-6">
                                                            <div className="celcius">{data.main.temp}<i className="wi wi-degrees text-primary"></i></div>
                                                        </div>
                                                        <div className="rht col-6 ">
                                                            <div className="weather text-uppercase lh-1 text-primary">{data.weather[0].main}</div>
                                                            <div className="place p">{data.name}, {data.sys.country}</div>
                                                        </div>
                                                    </div>
                                                    <div className="midRight col-sm-5 col-12 d-flex flex-column align-items-center justify-content-center">
                                                        <div className="date lh-1 text-dark">{new Date().toLocaleDateString()}</div>
                                                        <div className="time text-light">{new Date().toLocaleTimeString()}</div>
                                                    </div>
                                                </div>

                                                {/* ----------------BOTTOM--------------- */}
                                                <div className="bottom">
                                                    <div className="bottomInner row g-0">
                                                        <div className="sunset d-flex align-items-center  col-12 col-sm-6 col-md-3">
                                                            <i className="wi wi-sunset text-warning"></i>
                                                            <div className="side-content">
                                                                <div className="top1">{`${date.getHours()}:${date.getMinutes()}`}</div>
                                                                <div className="p">Sunset</div>
                                                            </div>
                                                        </div>
                                                        <div className="humidity d-flex align-items-center col-12 col-sm-6 col-md-3">
                                                            <i className="wi wi-humidity text-warning"></i>
                                                            <div className="side-content">
                                                                <div className="top1">{data.main.humidity}</div>
                                                                <div className="p">Humidity</div>
                                                            </div>
                                                        </div>

                                                        <div className="wind d-flex align-items-center col-12 col-sm-6 col-md-3">
                                                            <i className="wi wi-strong-wind text-warning"></i>
                                                            <div className="side-content">
                                                                <div className="top1">{data.wind.speed} knots</div>
                                                                <div className="p">Wind</div>
                                                            </div>
                                                        </div>
                                                        <div className="presssure d-flex align-items-center col-12 col-sm-6 col-md-3">
                                                            <i className="wi wi-barometer text-warning"></i>
                                                            <div className="side-content">
                                                                <div className="top1">{data.main.pressure} mm</div>
                                                                <div className="p">Pressure</div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            </>
                        )
                    })
                }
            </div>


        </>
    )
}

export default Temp