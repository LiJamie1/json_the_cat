const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    console.log('statusCode:', response && response.statusCode);

    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log(`Breed ${breedName} Not Found`);
    } else {
      callback(null, data[0]);
    }
  });
};

module.exports = fetchBreedDescription;