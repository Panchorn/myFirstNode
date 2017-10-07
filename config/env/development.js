module.exports = {
    // mongoUri: 'mongodb://localhost/myFirstNode',
    // or use 
    mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '<CLIENT>',
        clientSecret: '<CLIENT>',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
}