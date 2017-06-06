const { MongoClient } = require('mongodb');

const connect = promisify(MongoClient.connect.bind(MongoClient, process.env.MONGODB_URI));

module.exports = {
  getCollection: collectionName => (
    connectToCollection(collectionName).then(collection => {
      const results = collection.find();
      return promisify(results.toArray.bind(results));
    })
  ),

  insertInCollection: (collectionName, item) => (
    connectToCollection(collectionName).then(collection => (
      promisify(collection.insert.bind(collection, test))
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
