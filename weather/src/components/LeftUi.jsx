/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import wind from "../assets/wind.png"
import { Puff } from 'react-loader-spinner'
import drop from "../assets/drop.png"
import Forecast from './Forecast'

const LeftUi = ({ data, current, fetch, loading }) => {

    const [day, setDay] = useState(0);

    const [city, setCity] = useState()

    const [curr, setCurr] = useState("Your Location")

    // const [current, setCurrent] = useState()


    if (data == undefined || loading == true) {
        return (
            <div className='relative h-full'>
                <div className='absolute top-[40%] right-[40%] md:right-[50%] md:top-[45%] m-auto'>
                    <Puff color='#E9E9E9' />
                </div>
            </div>
        )
    }

    const handleEnter = (event) => {
        if (event.key == 'Enter') {
            setCurr(city);
            fetch(city)
            // console.log("Checking ")
        }
    }



    return (
        <div className='px-10 py-5 md:px-24 md:py-5'>
            <div className='flex justify-center md:justify-between items-center'>

                <div className='bg-[#F6F6F6] flex rounded-3xl  items-center focus:outline-none gap-2 py-3 md:px-6 w-[100%] md:w-fit'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" placeholder='Search City or Cordinates' className='bg-[#F6F6F6] focus:outline-none' onChange={(e) => setCity(e.target.value)} onKeyDown={handleEnter} />

                </div>
            </div>

            <div className='flex justify-center mt-8 md:mt-16'>
                <div className='relative'>
                    <p className='text-9xl md:text-[25vh] font-semibold text-[#696969]'>{day == 0 ? current.temp_c : data[day].day.avgtemp_c}°</p>
                    <div className="hidden md:flex absolute top-[50%] -right-24 m-auto ">
                        <div className='flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <img src={wind} alt="" className='w-6 h-6 md:w-8 md:h-8' />
                                <p className='font-semibold md:text-xl'>{day == 0 ? current.wind_kph : data[day].day.maxwind_kph} mph</p>
                            </div>

                            <div className='flex gap-2'>
                                <img src={drop} alt="" className='w-6 h-6 md:w-8 md:h-8' />
                                <p className='font-semibold md:text-xl'>{day == 0 ? current.humidity : data[day].day.avghumidity}%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Forecast day={day} setDay={setDay} data={data} />
        </div>
    )
}

export default LeftUi