// Array of countries
const countries = [
    'United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'United Kingdom',
    'France', 'Germany', 'Italy', 'Spain', 'China', 'Japan', 'South Korea',
    'India', 'Australia', 'New Zealand', 'South Africa', 'Nigeria', 'Egypt',
    'Russia', 'Turkey', 'Saudi Arabia', 'United Arab Emirates', 'Iran',
    'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Bhutan', 'Maldives'
];

// Function to create and append country elements
function displayCountries() {
    const countryGrid = document.getElementById('country-grid');
    
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        countryDiv.textContent = country;
        countryGrid.appendChild(countryDiv);
    });
}

// Initialize the display
displayCountries();
