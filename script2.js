const apiKey = 'b153e0f01046cb6b98c09180887041b1'; // Replace this with your OpenWeatherMap API Key

// Adding event listener to the "Get Weather" button
document.querySelector("button").addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    
    // Check if the city input is empty
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // Fetch weather data from OpenWeatherMap API
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    // Handle 404 error (city not found)
    if (response.status === 404) {
        alert("City not found. Please enter a valid city name.");
        return;
    }

    // Parse the response JSON data
    const data = await response.json();
    
    // Display weather data
    displayWeather(data);
}

function displayWeather(data) {
    // Select the elements where the data will be displayed
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    // Update the text content of the elements with the weather data
    cityName.innerText = `Weather in ${data.name}`;
    temperature.innerText = `Temperature: ${data.main.temp}°C`;
    description.innerText = `Description: ${data.weather[0].description}`;
    humidity.innerText = `Humidity: ${data.main.humidity}%`;
    wind.innerText = `Wind Speed: ${data.wind.speed} m/s`;

    // Make the weather info section visible
    document.querySelector('.weather-info').style.display = 'block';
}
