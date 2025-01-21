import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler (request : NextApiRequest, res : NextApiResponse){
    const {city} = request.query;
    const api = process.env.api;
    console.log(city);


    if(!city || typeof city !== "string"){
        res.status(400).json({ error: "Invalid city name" });
        return;
    }

    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather` , {
            params: {
                q: city,
                appid: api,
                units: "metric"
            }
        });

        const data = response.data;

        if (data.cod === 200) {
            res.status(200).json({
              city: data.name,
              temperature: data.main.temp,
              humidity: data.main.humidity,
              windspeed: data.wind.speed,
              description: data.weather[0].description,
            });
          } else {
            res.status(404).json({ error: "City not found." });
          }

    }catch (error: any) {
        console.error("Error fetching weather:", error);
    
        if (error.response) {
          res.status(error.response.status).json({ error: error.response.data.message });
        } else {
          res.status(500).json({ error: "Server error" });
        }
    }
}