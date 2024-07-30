// Example language data (for demonstration purposes)
const languageData = {
    'English': 91,
    'French': 45,
    'Arabic': 25,
    'Spanish': 24,
    'Russian': 9,
    'Portuguese': 9,
    'Dutch': 8,
    'German': 7,
    'Chinese': 5,
    'Swahili': 4,
    'Serbian': 4
  };
  
  // Function to find the most spoken languages
  function mostSpokenLanguages(countries, limit) {
    // Create an array of language objects from languageData
    const languageArray = Object.keys(languageData).map(language => ({ [language]: languageData[language] }));
  
    // Sort the languageArray based on the speaker counts in descending order
    languageArray.sort((a, b) => {
      const countA = Object.values(a)[0];
      const countB = Object.values(b)[0];
      return countB - countA;
    });
  
    // Return only the top 'limit' languages
    return languageArray.slice(0, limit);
  }
  
  // Example usage:
  console.log(mostSpokenLanguages(countries, 10));
  console.log(mostSpokenLanguages(countries, 3));
  