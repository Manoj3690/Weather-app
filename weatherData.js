const weatherInfo = async (cityName)=>{
    const APIKEY = "15b2768640d108f099bc839604a0fe71";
    const URL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+APIKEY+"&units=imperial";
    const response = await fetch(URL);
    const data = await response.json();
    return data;
}

const weatherImg = (image)=>{
    const imgURL = "https://openweathermap.org/img/wn/"+image+"@2x.png";
    return imgURL;
}

export {weatherInfo,weatherImg};