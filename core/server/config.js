module.exports = {
    port: 9909,
    mongoUri: 'mongodb://localhost:27017/goalkeeper',
    session: {
        sessionSecret: '20eggnog14',
        saveUninitialized: 'true',
        resave: true
    }
};