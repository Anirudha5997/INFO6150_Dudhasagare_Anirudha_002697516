import DailyForecast from './DailyForecast';

import {
    MDBCard,
    MDBCardTitle,
    MDBCardHeader
  } from 'mdb-react-ui-kit';
import DailyForecastCard from './DailyForecastCard';

const Card = ({data}) => {

    function setUrl(){
        switch(data?.current.weather[0].main){
            case "Clouds": 
               return "https://media.tenor.com/vp3w-EipP64AAAAC/one-piece-kaido.gif";

            case "Rain":
                return "https://media.tenor.com/ex7fGxWcBuYAAAAC/one-piece-brook.gif"
            
            case "Clear":
                return "https://media.tenor.com/BWk4_NBCmtgAAAAC/one-piece.gif"
            
            case "Snow":
                return "https://media.tenor.com/z8YRoeCaZG0AAAAC/chopper.gif"
            
            default: 
                return "https://mdbootstrap.com/img/new/standard/nature/184.webp"
        }
    }
    
    console.log(data?.current.weather[0].main);

  return (
    <div className='vh-100 d-flex row align-items-center justify-content-center'>
        <MDBCard className='w-25' >
            <MDBCardHeader className='d-flex row justify-content-center align-items-center p-4' style={{ background: `url(${setUrl()})`}}>  
                <div style={{color: "aliceblue"}}>
                    <MDBCardTitle className> Boston </MDBCardTitle>
                    <div>
                        <p> Local Time : {new Date(data?.current?.dt * 1000 ?? 0).toLocaleTimeString([], {
                                hour: '2-digit',
                                minute: '2-digit'
                                })} </p>
                        <p> Weather : {data?.current?.weather[0].main ?? "undefined"} </p>
                        <h1> {data?.current?.temp ?? "undefined"} °C</h1>
                        <p> Feels Like : {data?.current?.feels_like ?? "undefined"}</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <p> Humidity : {data?.current?.humidity ?? "undefined"} %</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <p> High : {data?.daily[0]?.temp?.max ?? "undefined"}°C</p>
                        <p style={{marginLeft : "7px", marginRight:"7px"}}> | </p>
                        <p> Low : {data?.daily[0]?.temp?.min ?? "undefined"}°C</p>
                    </div>
                </div>
                </MDBCardHeader>
                <DailyForecast />
                <div className='d-flex justify-content-around'>
                    {data?.daily?.slice(1,6).map((key) => 
                        <DailyForecastCard 
                            key={key.dt}
                            timeStamp={key.dt} 
                            temp={key.temp.day} 
                            icon={key.weather[0].icon}/>)}             
                </div>
        </MDBCard>
        
    </div>
  )
}
export default Card