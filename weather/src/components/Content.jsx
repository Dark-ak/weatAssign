/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Puff } from 'react-loader-spinner'
import LeftUi from './LeftUi'
import RightUi from './RightUi'
import axios from "axios"

const Content = () => {
  const [data, setData] = useState(null);
  // Initialize data with null
  const [loading, setLoading] = useState(false)

  const fetchData = async (city) => {
    try {
      setLoading(true); // Set loading state to true before starting the data fetching

      let response;
      if (city) {
        response = await axios.get(`https://darkak.onrender.com/api/forecast?city=${city}`);
      } else {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        response = await axios.get(`https://darkak.onrender.com/api/forecast?lat=${latitude}&long=${longitude}`);
      }

      setData(response.data); // Set data with response.data
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle errors, such as displaying an error message
    } finally {
      setLoading(false); // Set loading state to false after the data fetching (regardless of success or failure)
    }
  };



  useEffect(() => {
    fetchData();
  }, []);

  // Render loading component while data is being fetched
  if (data === null) {
    return (
      <div className='absolute top-[40%]'>
        <Puff color='blue' />
      </div>
    );
  }

  // Once data is fetched, render the main content
  const forecast = data.forecast?.forecastday;
  const hourly = forecast[0].hour;


  return (
    <div className='grid md:grid-cols-[65vw_400px] md:mt-5 '>
      <div className='bg-white rounded-3xl md:rounded-l-3xl md:rounded-r-none w-screen h-screen md:h-full md:w-full'>
        <LeftUi data={forecast} current={data.current} fetch={fetchData} loading={loading} />
      </div>
      <div className='hidden md:flex'>
        <RightUi data={data.current} hourly={hourly} />
      </div>
    </div>
  );
};

export default Content;