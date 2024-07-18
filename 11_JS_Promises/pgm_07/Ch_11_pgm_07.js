async function fetchJSON(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        return null;
    }
}

async function getAverageCatWeight() {
    const catsAPI = 'https://api.thecatapi.com/v1/breeds';
    try {
        const data = await fetchJSON(catsAPI);
        if (!data) return null;

        // Filter out breeds with valid weight data
        const validBreeds = data.filter(breed => breed.weight.metric !== undefined);

        // Calculate average weight
        const totalWeights = validBreeds.reduce((acc, breed) => {
            return acc + parseFloat(breed.weight.metric.split(' - ')[0]);
        }, 0);
        const averageWeight = totalWeights / validBreeds.length;

        console.log(`Average cat weight in metric units: ${averageWeight.toFixed(2)} kg`);
        return averageWeight;
    } catch (error) {
        console.error('Error fetching cat data:', error);
        return null;
    }
}

async function getLargestCountries() {
    const countriesAPI = 'https://restcountries.com/v2/all';
    try {
        const data = await fetchJSON(countriesAPI);
        if (!data) return null;

        // Sort countries by area in descending order
        data.sort((a, b) => b.area - a.area);

        // Get the top 10 largest countries
        const largestCountries = data.slice(0, 10).map(country => ({
            name: country.name,
            area: country.area
        }));

        console.log('Top 10 largest countries:');
        console.log(largestCountries);
        return largestCountries;
    } catch (error) {
        console.error('Error fetching countries data:', error);
        return null;
    }
}

async function countOfficialLanguages() {
    const countriesAPI = 'https://restcountries.com/v2/all';
    try {
        const data = await fetchJSON(countriesAPI);
        if (!data) return null;

        // Extract all official languages from all countries
        const allLanguages = data.flatMap(country => country.languages.map(lang => lang.name));

        // Use a Set to count unique languages
        const uniqueLanguages = new Set(allLanguages);
        const totalLanguages = uniqueLanguages.size;

        console.log(`Total number of official languages in the world: ${totalLanguages}`);
        return totalLanguages;
    } catch (error) {
        console.error('Error fetching countries data:', error);
        return null;
    }
}

// Main function to execute all tasks
async function main() {
    console.log("Fetching average cat weight...");
    const averageWeight = await getAverageCatWeight();

    console.log("\nFetching top 10 largest countries...");
    const largestCountries = await getLargestCountries();

    console.log("\nCounting total number of official languages...");
    const totalLanguages = await countOfficialLanguages();

    // You can further process or use the results here
    console.log("\nTasks completed.");
}

// Run the main function
main();
