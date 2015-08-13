var request = require('request');

let topTen = [];
var numOfStories = 10;
let counter = numOfStories;

var storyIds;
function getStoryIds() {

  var intervalTime = 1000;

  var interval = setInterval(function () {
    makeRequest('topstories');
  }, intervalTime);

  setTimeout(function(){

    for (var i in storyIds) {
      console.log(storyIds[i]);
    }
    // console.log(storyIds);
    clearInterval(interval);
  }, intervalTime * 3);
}

getStoryIds();
// function getTopTen() {
//
// }

// getTopTen()

function makeRequest(type, cb) {
  counter--

  var query = 'https://hacker-news.firebaseio.com/v0/' + type + '.json';

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
    // console.log(body);
    storyIds = body;
  });
}
