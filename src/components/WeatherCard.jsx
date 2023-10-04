import { useState } from "react"


const WeatherCard = ({weather, temp}) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemp = () => setIsCelsius(!isCelsius)

    return (
        <article className="weather">
            <h1 className="weather__tittle">Weather App</h1>
            <h2 className="weather__location">{weather?.name}, {weather?.sys.country}</h2>
            <div className="weather__contents">
                <div className="weather_img__origin">
                <img className="weather__img"
                src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
                </div>
                <section className="weather__info">
                    <h3 className="weather__description">"{weather?.weather[0].description}"</h3>
                    <ul className="weather_info__list">
                        <li className="weather__item"><span className="weather__label">Wind Speed</span><span className="weather__value">{weather?.wind.speed} m/s</span></li>
                        <li className="weather__item"><span className="weather__label">Clouds</span><span className="weather__value">{weather?.clouds.all} %</span></li>
                        <li className="weather__item"><span className="weather__label">Pressure</span><span className="weather__value">{weather?.main.pressure} hPa</span></li>
                    </ul>
                </section>
            </div>
            <h2 className="weather__temp">{isCelsius ? `${temp?.celsius} ºC` : `${temp?.farenheit} ºF`} </h2>
            <button className="weather__btn" onClick={handleChangeTemp}>{isCelsius ? 'Change to ºF' : 'Change to ºC'}</button>
        </article>
    )
}

export default WeatherCard
