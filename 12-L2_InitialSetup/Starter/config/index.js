var configValues = require('./config');

module.exports = {
  getDbConnectionString: function () {
    return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster0.do7shq4.mongodb.net/?retryWrites=true&w=majority`;
  },
};
