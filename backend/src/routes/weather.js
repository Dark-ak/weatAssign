require("dotenv").config();
const express = require("express");
const router = express.Router();
// const fetch = require("node-fetch")\
const axios = require("axios")


router.get("/forecast", async (req, res) => {

    const { city, lat, long } = req.query;

    try {
        let url;

        if (city) {
            url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.api_key}&q=${city}&days=6&aqi=no&alerts=no`;
        } else if (lat && long) {
            url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.api_key}&q=${lat},${long}&days=6&aqi=no&alerts=no`;
        } else {
            throw new Error("City or coordinates not provided");
        }

        const fetch = await axios.get(url);
        res.status(200).json(fetch.data);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }


})


module.exports = router