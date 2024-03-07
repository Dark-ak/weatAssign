/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import wind from "../assets/wind.png"
import { Puff } from 'react-loader-spinner'
import drop from "../assets/drop.png"


const RightUi = ({ data, hourly }) => {

    if (data == undefined || hourly == undefined) {
        return (
            <div className='relative w-[100%] bg-[#F6F6F6] h-full'>
                <div className='absolute top-[40%] right-[100%] md:right-[50%] md:top-[45%] m-auto'>
                    <Puff color='blue' />

                </div>

            </div>
        )
    }   

    const padding = (value) => {
        return value.toString().padStart(2,"0")
    }

    const time = new Date();    


    return (
        <div className='p-8 flex items-center flex-col rounded-r-3xl bg-[#F6F6F6]'>
            <div className='flex flex-col gap-4'>
                <p className='font-semibold text-3xl opacity-85'>Hi User</p>
                <p className='font-semibold text-center text-2xl'>{padding(time.getHours())}:{padding(time.getMinutes())} {time.getHours() >= 12 ? "'PM": "AM"}</p>
            </div>

            <div className="flex items-center flex-col mt-10 gap-4">
                <div className='flex gap-3 items-center'>
                    <p className='text-[#696969] text-6xl font-semibold'>{data.temp_c}°</p>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-2'>
                            <img src={wind} alt="" className='w-4 h-4' />
                            <p className='font-semibold text-xs'>{data.wind_kph} kph</p>
                        </div>

                        <div className='flex gap-2'>
                            <img src={drop} alt="" className='w-4 h-4' />
                            <p className='font-semibold text-xs'>{data.humidity}%</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-[#696969] text-base text-center font-medium'>Feels like {data.feelslike_c}°C</p>
                    <p className='text-center text-4xl font-semibold text-[#696969]'>{data.condition?.text}</p>
                </div>
            </div>

            <div className='mt-8'>
                <p className='font-semibold text-xl text-center'>Hourly Forecast</p>
                <div className='grid justify-center my-5 gap-5 grid-cols-3'>
                    <div className='border-2 px-5 py-2  justify-center  flex flex-col items-center gap-2 rounded-xl'>
                        <p className='font-semibold'>12 am</p>
                        <p className='text-2xl font-semibold text-[#696969]'>{hourly[0].temp_c}</p>
                        <p className='font-medium text-[#696969] opacity-50 text-center'>{hourly[0].condition.text}</p>
                    </div>
                    <div className='border-2 px-5 py-2 flex flex-col justify-center items-center gap-2 rounded-xl'>
                        <p className='font-semibold'>3 am</p>
                        <p className='text-2xl font-semibold text-[#696969]'>{hourly[1].temp_c}</p>
                        <p className='font-medium text-[#696969] opacity-50 text-center'>{hourly[1].condition.text}</p>
                    </div>
                    <div className='border-2 px-5 py-2  justify-center  flex flex-col items-center gap-2 rounded-xl'>
                        <p className='font-semibold'>6 am</p>
                        <p className='text-2xl font-semibold text-[#696969]'>{hourly[2].temp_c}</p>
                        <p className='font-medium text-[#696969] opacity-50 text-center'>{hourly[2].condition.text}</p>
                    </div><div className='border-2 px-5 py-2  justify-center  flex flex-col items-center gap-2 rounded-xl'>
                        <p className='font-semibold'>9 am</p>
                        <p className='text-2xl font-semibold  text-[#696969]'>{hourly[3].temp_c}</p>
                        <p className='font-medium text-[#696969] opacity-50 text-center'>{hourly[3].condition.text}</p>
                    </div><div className='border-2 px-5 py-2  justify-center  flex flex-col items-center gap-2 rounded-xl'>
                        <p className='font-semibold'>12 pm</p>
                        <p className='text-2xl font-semibold text-[#696969]'>{hourly[4].temp_c}</p>
                        <p className='font-medium text-[#696969] opacity-50 text-center'>{hourly[4].condition.text}</p>
                    </div><div className='border-2 px-5 py-2  justify-center  flex flex-col items-center gap-2 rounded-xl'>
                        <p className='font-semibold'>3 pm</p>
                        <p className='text-2xl font-semibold text-[#696969]'>{hourly[5].temp_c}</p>
                        <p className='font-medium text-[#696969] opacity-50 text-center'>{hourly[5].condition.text}</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default RightUi