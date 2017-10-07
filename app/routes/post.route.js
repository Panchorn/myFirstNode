var post = require('../controllers/post.controller');

module.exports = (app) => {
    var path = '/api/post';

    app.get(path + '/all', post.getAll);
    app.get(path + '/id/:id', post.getOne);
    app.get(path + '/mypost', post.getMyPost);
    app.post(path + '/create', post.create);
}