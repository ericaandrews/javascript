//OpenWeatherMap:
//https://home.openweathermap.org/api_keys

//Terminal:
//Create an empty directory named node-weather;
//Run: npm init;
//Fill out the information to initialize project;

//Create a file named index.js to house the code for the application;
//Install request by running: npm install request --save;

//Install yargs: npm install yargs --save;
//Run app: node index.js or node index or node index.js -c 'city';


let request = require('request');
let argv = require('yargs').argv;

let apiKey = '57fea6f894ddee81ae5d6129febde9aa';
let city = argv.c || 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

request(url, function (err, response, body) {
    if(err){
        console.log('error:', error);    
        } else {
      let weather = JSON.parse(body);
      let cityName = (weather.name);  
      let degrees = (weather.main.temp);
      let tempMin = (weather.main.temp_min);
      let tempMax = (weather.main.temp_max);
            
      let conversion = Math.round(((9/5)*(degrees-273))+32);
      let conversionMin = Math.round(((9/5)*(tempMin-273))+32);
      let conversionMax = Math.round(((9/5)*(tempMax-273))+32);        
      
      let message = 'Its';
      let messageTwo = 'degrees in';
      let messageThree = 'and the min temperature is';
      let messageFour = 'degrees and the max temperature is';
      let messageFive = 'degrees.';
      console.log(message,conversion,messageTwo,cityName,messageThree,conversionMin,messageFour,conversionMax,messageFive);
              
      };
});



