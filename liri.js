// Twitter
var twitter = require('twitter');

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

// Spotify
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "6f5dbcdf99d64490953aef10c53bef10",
  secret: "ab3106f3a1694ff594f44ac140d56199",
});
 
spotify.search({ type: 'track', query: ' ' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


// OMDB Request
var request = require('request');

request('http://www.omdbapi.com/?apikey=40e9cece&', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

var input = process.argv.splice(2).join(" ");
// Build your address as an array or string
//  used this above splice(2).join(" ");


// Then use Geocoder NPM to geocode the address
// Geocoding 
 request.request(input, function(err, data) {
  // do something with data 
if (err) {
	//  putting return stops the function
    return console.log(err);
  }  

// prettifies the JSON output - so not runon sentence of data
console.log(JSON.stringify(data, null, 2));
});
