var Todos = require('../models/todoModel');

module.exports = function (app, client) {
  app.get('/api/setupTodos', function (req, res) {
    // seed db
    var starterTodos = [
      {
        username: 'test',
        todo: 'Buy milk',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'test',
        todo: 'Feed dog',
        isDone: false,
        hasAttachment: false,
      },
      {
        username: 'test',
        todo: 'Learn Node',
        isDone: false,
        hasAttachment: false,
      },
    ];

    var db = client.db('nodetodosample');
    var collection = db.collection('todos');

    collection.insert(starterTodos);

    res.send(results);

    Todos.create(starterTodos, function (err, results) {
      res.send(results);
    });
  });
};
