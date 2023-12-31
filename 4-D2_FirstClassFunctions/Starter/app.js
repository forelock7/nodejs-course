// function statement (declaration)
function greet() {
  console.log("hi");
}
greet();

// function are first-class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression
var greetMe = function () {
  console.log("Hi Vova");
};
greetMe();

// It's still first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function () {
  console.log("Hello Tony");
});
