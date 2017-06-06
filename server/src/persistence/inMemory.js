const store = {};

module.exports = {
  getCollection: collectionName => Promise.resolve(store[collectionName]),

  insertInCollection: (collectionName, item) => {
    store[collectionName] = store[collectionName] || [];
    store[collectionName].push(item);
    return Promise.resolve();
  },
}
