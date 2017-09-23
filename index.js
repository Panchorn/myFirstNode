import mongoose from './config/mongoose';
import express from './config/express';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT = process.env.PORT || 3000;

var db = mongoose();
var app = express();

app.listen(process.env.PORT, () => {
    console.log('Starting node.js on port ' + process.env.PORT);
});

module.exports = app;