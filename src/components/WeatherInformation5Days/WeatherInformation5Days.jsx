import "./WeatherInformation5Days.css";

function WeatherInformation5Days({ weather5Days }) {
  if (
    !weather5Days ||
    !weather5Days.weather5Days ||
    weather5Days.weather5Days.length === 0
  ) {
  }

  let dailyForecast = {};
  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });

    return newDate;
  }
  console.log(next5DaysForecast);

  return (
    <div className="weather-container">
      <h3>Previsao Proximos 5 dias</h3>
      <div className="weather-list">
        {next5DaysForecast.map((forecast) => (
          <div className="weather-item" key={forecast.dt}>
            <p className="forecast-day">{convertDate(forecast)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt="Ícone do clima"
            />
            <p className="forecast-description">{forecast.weather[0].description}</p>
            <p>
              {Math.round(forecast.main.temp_min)}ºC min /{" "}
              {Math.round(forecast.main.temp_max)}ºC max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherInformation5Days;
