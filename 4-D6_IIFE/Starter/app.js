(function () {
  var firstname = 'John';
  console.log(firstname);
})();

var firstname = 'Jane';
console.log(firstname);

/////
console.log('-----------');

var firstname2 = 'Jane';

(function () {
  var firstname2 = 'John';
  console.log(firstname2);
})();

console.log(firstname2);
