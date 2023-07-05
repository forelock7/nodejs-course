////////////////////////////////////////////////////////////////////////////////////////////////
Section 2: V8: The Javascript Engine
////////////////////////////////////////////////////////////////////////////////////////////////

- Levels of programmig language

1. Machine Language
2. Assembly Language
3. C/C++
4. JavaScript

- Node is written in C++
- V8 is written in C++

- ECMAScript - standart Javascript is based on
- JavaScript - language

- JavaScript engine - program taht converts JS code into something the computer precessor can understand.

- V8 is Google's open source JavaSript engine. Written in C++. Implements ECMAScript as specified. I was create d to execute in Chrome browser

- JavaScript Code -> V8 engine(converts/interprete/compile) -> Machine Code

////////////////////////////////////////////////////////////////////////////////////////////////
Section 3: The Node Core
////////////////////////////////////////////////////////////////////////////////////////////////

- Client(Browser - JS) <--HTTP--> Server(WebServer - Js)

- Run NodeJS file:
  node app.js

////////////////////////////////////////////////////////////////////////////////////////////////
Section 4: Modules, Exports, and Require
////////////////////////////////////////////////////////////////////////////////////////////////

- Main objects:

1. Modules - reusable block of code (impact other code).
2. Exports
3. Require

- Commonjs modules - an agreed upon standart for how code modules should be structured

- First-Class Function - everything you can do with other types you can do with functions. You can use functions like string, numbers, etc. (i.e. pass them around, set variables equal to them, put them in arrays ...)

- Function Expression - a block of code that results in a value. Function expressions are possible in JS because functions are first-class.

- function statement (declaration)
  function greet() {
  console.log("hi");
  }
  greet();

- function are first-class
  function logGreeting(fn) {
  fn();
  }
  logGreeting(greet);

- function expression
  var greetMe = function () {
  console.log("Hi Vova");
  };
  greetMe();
- It's still first-class
  logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function () {
console.log("Hello Tony");
});

- Use module in another JS script file
  require("./greet.js");

- Not only execute all in module, but also get/invoke particular func
- Module (greet.js)
  var greet = function () {
  console.log("Hello!");
  };
  module.exports = greet;
- JS file (app.js)
  var greet = require("./greet");
  greet();

- Local variables for each JS script file
  **dirname
  **filename
  exports
  module
  require
  this
