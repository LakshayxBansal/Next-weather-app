"use client";

import axios from "axios";
import { useState } from "react";
import WeatherCard from "./WeatherCard";

export default function SearchBar(){

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<any>({});
    const [error, setError] = useState("");


    const handleSearch = async() => {
        if(city.length === 0){
            return alert("Please enter a city name");
        }
        if (!/^[a-zA-Z\s]+$/.test(city)) {
            return alert("Invalid city name. Please enter letters only.");
        }

        try{
            const response = await axios.get(`/api/fetchWeather?city=${city}`);
            setWeather(response.data);
            setCity("");
        }catch (err: any) {
            if (err.response && err.response.data.error) {
              alert(err.response.data.error);
            } else {
              alert("Something went wrong. Please try again later.");
            }
          }
    }

    
    return (
        <div>
            <input
            type = "text"
            placeholder="Enter city name"
            style={{ color: "black", backgroundColor: "white" }}
            value = {city}
            onChange = {(e) => setCity(e.target.value)}
            />

            <button onClick={handleSearch} style={{ padding: "10px 20px" }}>
                Search
            </button>

            <WeatherCard weather = {weather} />
        </div>
    )
}