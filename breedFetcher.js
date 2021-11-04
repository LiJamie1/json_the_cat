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


// console.log('body:', body);
// console.log(typeof body)
// console.log(body.length)
// if(error) throw err;

// if (body.length === 2) {
//   console.log("The breed you are looking for does not exist")
//   return
// }

// const data = JSON.parse(body);
// console.log(data[0].description);
// console.log(data)
// console.log(typeof data);
// return data