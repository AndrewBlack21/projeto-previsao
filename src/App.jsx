import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformation from './components/WeatherInformation/WeatherInformation'
import WeatherInformation5Days from './components/WeatherInformation5Days/WeatherInformation5Days'

function App() {
  const [weather, setWeather] = useState ()
  const [weather5Days, setWeather5Days] = useState ()
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const key = "2d82c6131e667e9685e7a83d8c5525c5"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather5Days(apiInfo5Days.data)
    setWeather(apiInfo.data)

    console.log(apiInfo5Days)
    
  }

  return (
    <div className='container'>
      <h1>Projeto Previsao do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformation weather={weather}/>}
      {weather5Days && <WeatherInformation5Days weather5Days={weather5Days}/>}

    </div>
  )
}

export default App
