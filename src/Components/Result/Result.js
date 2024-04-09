import React ,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import './Result.css';
const Result = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const lat = queryParams.get('lat');
    const lon=queryParams.get('lon');
    const [temp,setTemp]=useState(400);
    const [humidity,setHumidity]=useState();
    const [name,setName]=useState();
    const apikey = "3355238bdb63e0cabab2b62b57db07a9";
    useEffect(
      () => async (e) => {
      // e.preventDefault();
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
      );
      const data = await response.json();
      // const placeImage = document.getElementById("place-image");
      console.log(data);
      setTemp((t)=>data.main.temp);
      setHumidity(data.main.humidity);
      setName((n)=>data.name);
      
    },[]);
  return (
    <div className='resultPage'>
      <h1 >Roof Top Solar Panel Installation</h1>
      <div className="Result">
        <h3>SunShines hours/year :  1672</h3>
        <h3>Area meters<sup>2</sup> :  136</h3>
        <h3>Max panels count : 60</h3>
        <h3>@{name}</h3>
        {/* <button onClick={handleSubmit}>submit</button> */}
        {/* {temp && temp > 300 && humidity<65 ? <div className="centered-result">we can install solar panel in this {name} with efficiency 0.7</div>:<div className="centered-result">we can't install solar panel in this {name} with efficiency 0.3</div>} */}
      </div>
    </div>
  )
}

export default Result


// `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`