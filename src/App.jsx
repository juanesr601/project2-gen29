import { useEffect, useState } from 'react';
import './App.css'
import WeatherCard from './components/WeatherCard';
import axios from 'axios';

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(() => {
    const success = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(coords !== undefined) {
      const apiKey = '694f379689a736e43f2342912bd55c01'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
      axios.get(url)
        .then(res => {
          setWeather(res.data)
          const obj = {
            celsius: (res.data.main.temp - 273.15).toFixed(1),
            farenheit: ((res.data.main.temp - 273.15) * 9/5 + 32).toFixed(1)
          }
          setTemp(obj)
        })
        .catch(err => console.log(err))
    }
  }, [coords])

  
  return (
    <div className='master'>
      <WeatherCard
        weather={weather}
        temp={temp}
      />
    </div>
  )
}

export default App
