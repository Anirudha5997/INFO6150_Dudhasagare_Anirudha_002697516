import React from 'react';
import './component.css'
import {useNavigate} from "react-router-dom"
const DailyForecastCard = ({timeStamp, temp, icon}) => {
  const navigate = useNavigate();
    //dt to day conversion;
    function dtToDay(dt){
        let date = new Date(dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        return days[day];
    }

  return (
    <div className='d-flex flex-row justify-content-between align-items-center' style={{cursor: "pointer"}}>
        <div onClick = {() => navigate(`/${dtToDay(timeStamp)}?day=${timeStamp}`)} className='d-flex flex-column justify-content-between align-items-center'>
            <p> {dtToDay(timeStamp ?? "undefined")} </p>
            <img src= {`https://openweathermap.org/img/wn/${icon}.png`} alt="" />
            <p> <strong>{temp} °C</strong> </p>
        </div>
    </div>
  )
}
export default DailyForecastCard