const countriesAPI = 'https://restcountries.com/v2/all';

// Function to fetch and print country information
async function fetchCountryInfo() {
    try {
        const response = await fetch(countriesAPI);
        if (!response.ok) {
            throw new Error('Failed to fetch country data');
        }
        const countries = await response.json();

        countries.forEach(country => {
            const { name, capital, languages, population, area } = country;
            console.log(`Country: ${name}`);
            console.log(`Capital: ${capital}`);
            console.log(`Languages: ${languages.map(lang => lang.name).join(', ')}`);
            console.log(`Population: ${population}`);
            console.log(`Area: ${area}`);
            console.log('-----------------------');
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function to fetch and print country information
fetchCountryInfo();
