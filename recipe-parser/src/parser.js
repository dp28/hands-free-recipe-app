const { findByXPath, findAllByXPath } = require('./xpath');

module.exports = {
  parseField,

  buildFieldParser: (name, type, path) => ({ name, type, path }),

  parseFields: (fields, doc) => Object.values(fields).reduce(appendParsedField(doc), {})
}

const Parsers = {
  text: parseTextField,
  list: parseListField,
}

function appendParsedField(doc) {
  return (result, field) => {
    result[field.name] = parseField(field, doc);
    return result;
  };
}

function parseField({ type, paths }, doc) {
  const parser = Parsers[type];
  if (parser && paths) {
    return parser(paths, doc);
  }
}

function parseTextField(paths, doc) {
  return paths
    .map(path => getTextContent(findByXPath(path, doc)))
    .filter(Boolean)
    .join(' ')
}

function parseListField(paths, doc) {
  return paths.reduce(
    (list, path) => list.concat(findAllByXPath(path, doc).map(getTextContent)),
    []
  );
}

function getTextContent(node) {
  return findAllByXPath('.//text()', node)
    .map(textNode => textNode.data)
    .join('')
    .trim()
}
