import React from 'react'
import { useSearchParams } from 'react-router-dom';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardHeader,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import HourlyDetails from '../components/HourlyDetails';

const Details = ({data}) => {
  let [searchParams] = useSearchParams();
  let day = searchParams.get("day");

  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <MDBCard style={{width: "700px"}}>
        <MDBCardHeader>
        <MDBCardTitle> Hourly Forecast </MDBCardTitle>
        </MDBCardHeader>
        <MDBRow className='justify-content-evenly  '>
          {data?.hourly
            .filter( ele => new Date(day * 1000).getDay() === new Date (ele.dt * 1000).getDay())
            .map((key) => 
            <MDBCol size={6} sm={6} md={3} lg={2}><HourlyDetails 
            key={key.dt}
            time={key.dt} 
            temp={key.temp} 
            icon={key.weather[0].icon}/>
            </MDBCol>)}              
        </MDBRow>
        
      </MDBCard>
    </div>
  )
}

export default Details