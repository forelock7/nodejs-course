var greeting = require('./greeting.json');

var greet = function () {
  console.log('Hello');
  console.log(greeting.en);
};

module.exports = greet;
