const { parseFields } = require('./parser');

const CountContent = {
  text: text => (text && text.length ? 1 : 0),
  list: list => (list && list.length ? list.length : 0),
};

module.exports = {
  findBestParser: (parsers, dom) => {
    return findMostComplete(parsers)
      .map(getOutputWithSize(dom))
      .sort((a, b) => b.size - a.size)[0];
    }
}

function getOutputWithSize(dom) {
  return (parser) => {
    const output = parseFields(parser.fields, dom);
    const size = calculateContentSize(parser, output);
    return { parser, output, size };
  }
}

function calculateContentSize(parser, parserOutput) {
  return Object
    .values(parser.fields)
    .reduce(
      (sum, field) => sum + CountContent[field.type](parserOutput[field.name]),
    0);
}

function findMostComplete(parsers) {
  return parsers
    .map(parser => ({ parser, completeness: calculateCompletenessRatio(parser) }))
    .sort((a, b) => b.completeness - a.completeness)
    .reduce((best, next) => (asCompleteAs(best, next) ? best.concat([next]) : best), [])
    .map(_ => _.parser);
}

function calculateCompletenessRatio(parser) {
  const fields = Object.values(parser.fields);
  const usefulFields = fields.filter(hasPaths);
  return usefulFields.length / fields.length;
}

function hasPaths(field) {
  return field.paths.length > 0;
}

function asCompleteAs(haveCompleteness, { completeness }) {
  return !haveCompleteness.length || haveCompleteness[0].completeness === completeness;
}
