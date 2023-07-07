const { join } = require('path');

var person = {
  firstname: '',
  lastname: '',
  greet: function () {
    return this.firstname + ' ' + this.lastname;
  },
};

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
john.firstname = 'Jane';
john.lastname = 'Doe';

console.log(john.greet());
