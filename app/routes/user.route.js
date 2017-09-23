var user = require('../controllers/user.controller');

module.exports = (app) => {
    var path = '/api/user';

    app.get(path + '/getuser', user.getUsers);
    app.post(path + '/signup', user.create);
}