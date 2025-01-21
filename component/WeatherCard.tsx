interface WeatherData {
    weather :{
        city : string
        temperature : number
        humidity : number
        windspeed : number
        description : string
    }
}

export default function WeatherCard({weather} : WeatherData){
    return (
        <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "300px",
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <h2>{weather.city}</h2>
      <p>
        <strong>Temperature:</strong> {weather.temperature}°C
      </p>
      <p>
        <strong>Description:</strong> {weather.description}
      </p>
      <p>
        <strong>Humidity:</strong> {weather.humidity}%
      </p>
      <p>
        <strong>Wind Speed:</strong> {weather.windspeed} m/s
      </p>
    </div>
    )
}