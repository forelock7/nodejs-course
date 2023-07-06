var greeting = require('./greeting.json');

var greet = function () {
  console.log('Hola');
  console.log(greeting.es);
};

module.exports = greet;
