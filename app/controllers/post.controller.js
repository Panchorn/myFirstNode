var Post = require('mongoose').model('Post');
var path = require("path");

exports.getAll = (req, res, next) => {
    if (req.user) {
        Post.find((err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}

exports.getOne = (req, res, next) => {
    if (req.user) {
        Post.findOne({ _id: req.params.id }, (err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}

exports.getMyPost = (req, res, next) => {
    if (req.user) {
        var username = req.user.username;
        console.log(username);
        Post.find({ author: username }, (err, data) => {
            if (err) {
                console.log('Failure: ' + err);
                return next(err);
            }
            else {
                console.log(data);
                res.json(data);
            }
        }).sort({ time: 'desc' });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}

exports.create = (req, res, next) => {
    if (req.user) {
        var post = new Post(req.body);
        post.author = req.user.username;
        post.save(function (err) {
            if (err) {
                res.status(400).send({
                    message: err
                });
            }
            else {
                res.json(post);
            }
        });
    }
    else {
        res.status(400).send({
            message: 'User is not signed in'
        });
    }
}