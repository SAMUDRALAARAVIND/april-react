import { Component } from "react";
import "./weather.css";

const apiKey = "f0256276009d9809bd8189e577cefd4c";

// {
//     "coord": {
//         "lon": 78.4772,
//             "lat": 17.4065
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04n"
//         }
//     ],
//         "base": "stations",
//             "main": {
//         "temp": 305.79,
//             "feels_like": 304.35,
//                 "temp_min": 305.79,
//                     "temp_max": 305.79,
//                         "pressure": 1010,
//                             "humidity": 27,
//                                 "sea_level": 1010,
//                                     "grnd_level": 954
//     },
//     "visibility": 10000,
//         "wind": {
//         "speed": 2.26,
//             "deg": 95,
//                 "gust": 4.62
//     },
//     "clouds": {
//         "all": 93
//     },
//     "dt": 1713287204,
//         "sys": {
//         "type": 1,
//             "id": 9213,
//                 "country": "IN",
//                     "sunrise": 1713227350,
//                         "sunset": 1713272527
//     },
//     "timezone": 19800,
//         "id": 1269843,
//             "name": "Hyderabad",
//                 "cod": 200
// }

const imageMapping = {
    Clouds: "./images/cloudy.jpeg",
    Rain: "./images/rain.webp",
    Snow: "./images/snow.webp"
}

class WeatherApp extends Component {

    async fetchWeatherReport(lat, lng) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`);
            const result = await response.json();
            this.setState(result);
        }
        catch (error) {
            // TODO: handle error
        }
    }

    getMyWeatherReport = () => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                this.fetchWeatherReport(latitude, longitude);
            },
            (err) => {
                alert("Unable to access your location");
            }
        );
    }

    render() {
        const onSubmit = (event) => {
            event.preventDefault();
            const lat = event.target["lat"].value;
            const lng = event.target["lng"].value;
            // fetch the weather data 
            this.fetchWeatherReport(lat, lng);
        };

        const weatherType = this.state?.weather?.[0]?.main;
        const city = this.state?.name;
        const temparature = this.state?.main?.temp - 273.15;
        const windSpeed = this.state?.wind?.speed;

        return (
            <div className="container">
                <div>
                    <form onSubmit={onSubmit}>
                        <input type="text" name="lat" placeholder="Enter Latitude" required />
                        <input type="text" name="lng" placeholder="Enter Longitude" required />
                        <button>Get Weather report</button>
                        <button type="button" onClick={this.getMyWeatherReport}>Get My weather report</button>
                    </form>
                    <div className="report">
                        {
                            this.state && <>
                                <img src={imageMapping[weatherType]} />
                                <p><b>Temparature:</b> {temparature} </p>
                                <p><b>Wind Speed:</b> {windSpeed} </p>
                                <p><b>City:</b> {city} </p>
                            </>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherApp;