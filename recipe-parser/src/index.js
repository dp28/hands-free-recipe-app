const { buildDOM } = require('./dom');
const { findBestParser } = require('./parserComparison');
const { parseField } = require('./parser');

module.exports = {
  parseField: (field, html) => parseField(field, buildDOM(html)),

  findBestParser: (parsers, html) => findBestParser(parsers, buildDOM(html)),
}
