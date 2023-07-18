var mangoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean,
});

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
