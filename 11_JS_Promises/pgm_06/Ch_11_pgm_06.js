const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Function to fetch cat names
async function fetchCatNames() {
    try {
        const response = await fetch(catsAPI);
        if (!response.ok) {
            throw new Error('Failed to fetch cat data');
        }
        const cats = await response.json();

        const catNames = cats.map(cat => cat.name);
        console.log('Cat Names:', catNames);

        return catNames; // Return the array of cat names if needed for further processing

    } catch (error) {
        console.error('Error fetching cat data:', error);
        return []; // Return an empty array in case of error
    }
}

// Call the function to fetch and print cat names
fetchCatNames();
