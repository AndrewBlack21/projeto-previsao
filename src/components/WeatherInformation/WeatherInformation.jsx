import './WeatherInformation.css'

function WeatherInformation({ weather }) {
    // Verifica se weather existe e se contém um array válido de weather
    if (!weather || !weather.weather || weather.weather.length === 0) {
        return <p>Carregando informações do clima...</p>;
    }

    return (
        <div className='weather-container'>
            <h2>{weather.name}</h2>
            <div className='weather-info'>
            <img 
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} 
                alt="Ícone do clima" 
            />
            <p className='temperature'>{Math.round(weather.main.temp)}ºC</p>

            </div>
            <p className='description'>{weather.weather[0].description}</p>
            
            <div className='details'>
                <p>Sensação termica: {Math.round(weather.main.feels_like)}ºC</p>
                <p>Umidade: {weather.main.humidity}</p>
                <p>Pressão: {weather.main.pressure}</p>
            </div>
        </div>
    );
}

export default WeatherInformation;
