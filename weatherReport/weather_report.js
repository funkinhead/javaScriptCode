function showweatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const lat = document.getElementById(`lat`).value;
    const lon =document.getElementById(`lon`).value;
    const apiKey = 'ebb04b07ce4e112ddef944d06f611656'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
     fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
     
    fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById(`weatherInfo`);
            weatherInfo.innerHTML = `<h2>Weather at ${data.coord.lat} , ${data.coord.lon}</h2>
                                    <p>Temperature : ${data.main.temp} &#8451;</p>
                                    <p>Weather : ${data.weather[0].description}</p>`;
        });

}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
