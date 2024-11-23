import React, { useState } from "react";
import Header from "./Header";
import Container from "./Container";
import Footer from "./Footer";
import { weatherImg, weatherInfo } from "./services/weatherData";
const App =  ()=>{
    
    let [cityname,setCityName]= useState("Madurai");
    let [weatherData,setWeatherData] = useState({
        cityName: null,
        climateName:null,
        iconType:null,
        description:null,
        temperature:null,
        minTemp:null,
        maxTemp:null,
        humidity:null,
        sunRise:null,
        sunSet:null,
        cod:""
    });
   
    window.addEventListener("load", async()=>{
        
        let data = await weatherInfo(cityname);

        setWeatherData({
            cityName:data.name,
            climateName:data.weather[0].main,
            iconType:data.weather[0].icon,
            description:data.weather[0].description,
            temperature:"Temperature : "+data.main.temp+" °F",
            minTemp:"Min-temp : "+data.main.temp_min+" °F",
            maxTemp:"Max-temp : "+data.main.temp_max+" °F",
            humidity:"Humidity : "+data.main.humidity+"%",
            sunRise:"Sunrise : "+new Date(data.sys.sunrise).getHours()+":"+new Date(data.sys.sunrise).getMinutes()+" AM",
            sunSet:"Sunset : "+new Date(data.sys.sunset).getHours()+":"+new Date(data.sys.sunset).getMinutes()+" PM",
            cod:data.cod
        })
    })
    let updateInputTxt=(e)=>{
        
     setCityName(e.target.value);
    }

    const updateWeatherReport = async ()=>{
       
        let data = await weatherInfo(cityname);

        setWeatherData({
            cityName:data.name,
            climateName:data.weather[0].main,
            iconType:data.weather[0].icon,
            description:data.weather[0].description,
            temperature:"Temperature:"+data.main.temp+"°F",
            minTemp:"Min-temp:"+data.main.temp_min+"°F",
            maxTemp:"Max-temp:"+data.main.temp_max+"°F",
            humidity:"Humidity:"+data.main.humidity+"%",
            sunRise:"Sunrise:"+new Date(data.sys.sunrise).getHours()+":"+new Date(data.sys.sunrise).getMinutes()+" AM",
            sunSet:"Sunset:"+new Date(data.sys.sunset).getHours()+":"+new Date(data.sys.sunset).getMinutes()+" PM",
            cod:data.cod
        })
    }
   
   
   return (
    <div>
        <Header />
       
        <Container
            
            cityName={ weatherData.cityName}
            climateName={weatherData.climateName}
            imgSource={weatherImg(weatherData.iconType)}
            description={weatherData.description}
            temperature={weatherData.temperature}
            minTemp={weatherData.minTemp}
            maxTemp={weatherData.maxTemp}
            humidity={weatherData.humidity}
            sunRise={weatherData.sunRise}
            sunSet={weatherData.sunSet}
            onChanged={updateInputTxt}
            onClicked={updateWeatherReport}
            
        />
        <Footer />
    </div>
   )
}
export default App;