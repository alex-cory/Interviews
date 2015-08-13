var request = require('request');

let topTen = [];
var numOfStories = 10;
let counter = numOfStories;

let interval;
function getTopTen() {
  var intervalTime = 1000;

  interval = setInterval(function () {
    console.log("COUNTER", counter);
    if (counter !== 0) {
      makeRequest('topstories', counter);
    }
    if (counter == 0) {
      console.log(topTen);
    }
  }, intervalTime);

  setTimeout(function(){
    clearInterval(interval);
    console.log('interval cleared');
  }, intervalTime * 12);
}

getTopTen()

function makeRequest(type, id) {
  counter--

  var query = 'https://hacker-news.firebaseio.com/v0/';
  if (id) {
    query += type + '/' + id + '.json';
  } else {
    query += type;
  }

  request(query, function (error, response, body) {
    if (!error && response.statusCode != 200) {
      error = response.statusCode;
    }

    if (typeof body !== 'undefined') {
      try {
        body = JSON.parse(body);
      } catch (ex) {
        if (!error) error = ex;
      }
    }

    topTen.push(body);
  });
}
