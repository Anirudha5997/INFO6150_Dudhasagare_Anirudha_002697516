import React from 'react'
import "./component.css"

const HourlyDetails = ({time, icon, temp}) => {
    function dtToTime(dt){
        let hr = new Date(dt * 1000).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
            });
        return hr
    }
    
  return (
    <div id='hourlyDetails' className='d-flex flex-column justify-content-between align-items-center'>
        <p> {dtToTime(time ?? "undefined")} </p>
        <img src= {`https://openweathermap.org/img/wn/${icon}.png`} alt="" />
        <p> <strong>{temp} °C </strong> </p>
    </div>
  )
}

export default HourlyDetails