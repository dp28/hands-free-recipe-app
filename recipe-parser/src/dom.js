const { DOMParser } = require('xmldom');

module.exports = {
  buildDOM: (html) => suppressXMLDOMLogging(() => new DOMParser().parseFromString(html))
};

function suppressXMLDOMLogging(func) {
  const restoreWarn = suppressXMLDOMConsoleMethod('warn');
  const restoreError = suppressXMLDOMConsoleMethod('error');
  const result = func();
  restoreWarn();
  restoreError();
  return result;
}

function suppressXMLDOMConsoleMethod(methodName) {
  const original = console[methodName];

  console[methodName] = (...args) => {
    if (!isLogFromXMLDOM(args[0]))
      original(...args)
  }

  return () => console[methodName] = original;
}

function isLogFromXMLDOM(log) {
  return Boolean(log.match(/^\[xmldom/));
}
