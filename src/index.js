async function callWeatherApi(location) {
    document.getElementById('result-loader').style.display = 'block'
    document.getElementById('weather-result-container').style.display = 'none'
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?&key=30ea2fa6f6f34a80b41145137232304&q=${location}`)
    return await response.json();
}

async function selectLocation() {
    const location = document.getElementById('location-name').value
    const result = await callWeatherApi(location)
    showWeatherResult(result)
}



function initializeOnClick(){
    const submitLocationButtonElement = document.getElementById('button-submit-location')
    submitLocationButtonElement.addEventListener('click',selectLocation)
}

function showWeatherResult(result) {
    const location = document.getElementById('weather-location');
    const temperature = document.getElementById('weather-temperature');
    const humidity = document.getElementById('weather-humidity');
    const wind = document.getElementById('weather-wind');

    location.innerHTML = result.location.name + ', ' + result.location.country
    temperature.innerHTML = `${result.current.temp_c} °C`;
    humidity.innerHTML = `Humidity: ${result.current.humidity}%`
    wind.innerHTML = `Wind: ${result.current.wind_kph} km/h`
    document.getElementById('result-loader').style.display = 'none'
    document.getElementById('weather-result-container').style.display = 'block'
}


initializeOnClick();