module.exports = process.env.NODE_ENV === 'production' ? require('./mongo') : require('./inMemory');
