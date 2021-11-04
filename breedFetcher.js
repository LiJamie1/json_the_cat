const request = require('request')
const args = process.argv.slice(2)

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  console.log('error:', error);
  if(error) {
    return error
  }
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body)

  if (data.length === 0){
    console.log("Breed Not Found");
    return;
  }

  console.log(`${data[0].name}: ${data[0].description}`)
});