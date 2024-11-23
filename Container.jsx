import React from "react";
const Container = (props)=>{

       
    return (
        <div className="container" >
            <div className="searching-section">
                <input type="text" spellCheck="true" autoComplete="on" placeholder="city name here ....." onChange={props.onChanged}/>
                <button type="button" onClick={props.onClicked}><i class="fa-solid fa-magnifying-glass fa-fade"></i></button>
            </div>
            <div className="description-section">
                <p className="city-name">{props.cityName}</p>
               
                <p className="climate-name">{props.climateName}</p>
                <img className="weather-icon" src={props.imgSource} alt={props.climateName} />
                <p className="description">{props.description}</p>
            </div>
            <div className="temperature-section">
                <p className="temp">{props.temperature}</p>
                <p className="min-temp">{props.minTemp}</p>
                <p className="max-temp">{props.maxTemp}</p>
            </div>
            <div className="others-section">
                <p className="humidity">{props.humidity}</p>
                <p className="sunrise">{props.sunRise}</p>
                <p className="sunset">{props.sunSet}</p>
            </div>

            
        </div>
    )
}
export default Container;