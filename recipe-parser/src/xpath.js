const { select, select1 } = require('xpath');

module.exports = { findByXPath, findAllByXPath };

function findByXPath(xpath, doc) {
  return select1(xpath, doc);
}

function findAllByXPath(xpath, doc) {
  return select(xpath, doc);
}
