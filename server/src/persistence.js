const { MongoClient } = require('mongodb');

const connect = promisify(MongoClient.connect.bind(MongoClient, process.env.MONGODB_URI));

module.exports = {
  getTests: () => {
    return connectToCollection('tests').then(tests => {
      const results = tests.find();
      return promisify(results.toArray.bind(results));
    });
  },

  insertTest: (test) => (
    connectToCollection('tests').then(tests => (
      promisify(tests.insert.bind(tests, test))
    ))
  ),
};

function connectToCollection(collectionName) {
  return connect.then(db => db.collection(collectionName));
}

function promisify(takesCallback) {
  return new Promise((resolve, reject) => {
    takesCallback((error, result) => error ? reject(error) : resolve(result))
  });
}
