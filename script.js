document.getElementById('getCountryButton').addEventListener('click', function() {
    const countryName = document.getElementById('countryInput').value.trim();

    if (countryName === '') {
        alert('Please enter a country name.');
        return;
    }

    const url = `https://restcountries.com/v3.1/name/${countryName}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Country not found.');
            }
            return response.json();
        })
        .then(data => {
            const country = data[0];
            const countryInfo = `
                <h2>${country.name.common}</h2>
                <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                <p><strong>Region:</strong> ${country.region}</p>
                <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                <p><strong>Area:</strong> ${country.area.toLocaleString()} km²</p>
                <p><strong>Flag:</strong></p>
                <img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100">
            `;
            document.getElementById('countryResult').innerHTML = countryInfo;
        })
        .catch(error => {
            document.getElementById('countryResult').innerHTML = `<p>${error.message}</p>`;
        });
});