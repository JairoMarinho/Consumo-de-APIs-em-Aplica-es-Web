document.getElementById('getWeatherButton').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Substitua por sua chave de API da OpenWeatherMap

    if (city === '') {
        alert('Por favor, digite o nome de uma cidade.');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Cidade não encontrada');
            }
            return response.json();
        })
        .then(data => {
            const weatherDescription = data.weather[0].description;
            const temperature = data.main.temp;
            const cityName = data.name;

            document.getElementById('weatherResult').innerHTML = `
                <p>Clima em ${cityName}: ${weatherDescription}</p>
                <p>Temperatura: ${temperature}°C</p>
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `
                <p>${error.message}</p>
            `;
        });
});