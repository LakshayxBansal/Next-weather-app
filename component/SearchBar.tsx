"use client";

import axios from "axios";
import { useState } from "react";
import WeatherCard from "./WeatherCard";

export default function SearchBar(){

    // const cityInputRef  = useRef<HTMLInputElement>(null);
    const [weather, setWeather] = useState<any>({});



    const handleSearch = async(event :  React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget); // Create a FormData object from the form
        const city = formData.get("city") as string;

        // const city = cityInputRef.current?.value;

        if(! city || city.length === 0){
            return alert("Please enter a city name");
        }
        if (!/^[a-zA-Z\s]+$/.test(city)) {
            return alert("Invalid city name. Please enter letters only.");
        }


        try{
            setTimeout(async () => {
                console.log("Timeout over");
            }, 10000);
            const response = await axios.get(`/api/fetchWeather?city=${city}`);
            
            setWeather(response.data);
            // cityInputRef.current!.value = "";
        }catch (err: any) {
            console.log(err);
            if (err.response && err.response.data.error) {
              alert(err.response.data.error);
            } else {
              alert("Something went wrong. Please try again later.");
            }
          }
    }

    
    return (
        <form onSubmit={handleSearch}>
            <input
            type = "text"
            placeholder="Enter city name"
            style={{ color: "black", backgroundColor: "white" }}
            name = "city"
            // ref = {cityInputRef}
            />

            <button type="submit" style={{ padding: "10px 20px" }}>
                Search
            </button>

            <WeatherCard weather = {weather} />
        </form>
    )
}