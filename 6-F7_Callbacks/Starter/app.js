function greet(callback) {
  console.log('Hello!');

  var data = {
    name: 'John Doe',
  };
  callback(data);
}

greet(function (data) {
  console.log('The callback was invoke!');
  console.log(data);
});

greet(function (data) {
  console.log('The callback was different invoke!');
  console.log(data.name);
});
