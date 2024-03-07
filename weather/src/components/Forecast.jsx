/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Forecast = ({ day,setDay, data }) => {

    const formatDate = (value) => {
        const date = new Date(value);
        const month = date.getMonth().toString().padStart(2,"0")
        const day = date.getDate().toString().padStart(2,"0")

        return `${month}/${day}`
    }

    return ( 
        <div className='grid gap-8 md:gap-10 justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-20 md:mt-20'>

            <div className={`flex flex-col justify-center items-center gap-2 py-2 px-4 md:px-0 rounded-xl cursor-pointer ${day == 0 ? "border-2 border-gray-300" : "border-0"}`} onClick={() => setDay(0)}>
                <p className='font-semibold text-lg'>{formatDate(data[0].date)}</p>
                <p className='font-medium text-3xl text-[#696969]'>{data[0]?.day.avgtemp_c}°</p>
                <p className='text-lg font-medium text-[#696969] opacity-50 text-center'>{data[0]?.day.condition.text}</p>
            </div>
            <div className={`flex flex-col items-center justify-center gap-2 py-2 rounded-xl cursor-pointer ${day == 1 ? "border-2 border-gray-300" : "border-0"}`} onClick={() => setDay(1)}>
                <p className='font-semibold text-lg'>{formatDate(data[1].date)}</p>
                <p className='font-medium text-3xl text-[#696969]'>{data[1]?.day.avgtemp_c}°</p>
                <p className='text-lg font-medium text-[#696969] opacity-50 text-center'>{data[1]?.day.condition.text}</p>
            </div>
            <div className={`flex flex-col items-center gap-2 py-2 justify-center rounded-xl cursor-pointer ${day == 2 ? "border-2 border-gray-300" : "border-0"}`} onClick={() => setDay(2)}>
                <p className='font-semibold text-lg'>{formatDate(data[2].date)}</p>
                <p className='font-medium text-3xl text-[#696969]'>{data[2]?.day.avgtemp_c}°</p>
                <p className='text-lg font-medium text-[#696969] opacity-50 text-center'>{data[2]?.day.condition.text}</p>
            </div>
            <div className={`flex flex-col items-center gap-2 py-2 rounded-xl justify-center cursor-pointer ${day == 3 ? "border-2 border-gray-300" : "border-0"}`} onClick={() => setDay(3)}>
                <p className='font-semibold text-lg'>{formatDate(data[3].date)}</p>
                <p className='font-medium text-3xl text-[#696969]'>{data[3]?.day.avgtemp_c}°</p>
                <p className='text-lg font-medium text-[#696969] opacity-50 text-center'>{data[3]?.day.condition.text}</p>
            </div>
            <div className={`flex flex-col  items-center gap-2 py-2 rounded-xl justify-center cursor-pointer ${day == 4 ? "border-2 border-gray-300" : "border-0"}`} onClick={() => setDay(4)}>
                <p className='font-semibold text-lg'>{formatDate(data[4].date)}</p>
                <p className='font-medium text-3xl text-[#696969]'>{data[4]?.day.avgtemp_c}°</p>
                <p className='text-lg text-center font-medium text-[#696969] opacity-50'>{data[4]?.day.condition.text}</p>
            </div>
            <div className={`flex flex-col items-center gap-2 py-2 rounded-xl justify-center cursor-pointer ${day == 5 ? "border-2 border-gray-300" : "border-0"}`} onClick={() => setDay(5)}>
                <p className='font-semibold text-lg'>{formatDate(data[5].date)}</p>
                <p className='font-medium text-3xl text-[#696969]'>{data[5]?.day.avgtemp_c}°</p>
                <p className='text-lg font-medium text-[#696969] opacity-50 text-center'>{data[5]?.day.condition.text}</p>
            </div>
        </div>
    )
}

export default Forecast