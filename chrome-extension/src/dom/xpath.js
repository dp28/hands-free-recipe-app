export function getXPathToSiblings(element) {
  return getPathTo(element, '', true);
}

export function getXPathToElement(element) {
  return getPathTo(element);
}

function getPathTo(element, pathSoFar = '', includeSiblings = false) {
  if (element.id !== '') {
    return `id("${element.id}")${pathSoFar}`;
  }
  if (element === document.body) {
    return `${getTagName(element)}${pathSoFar}`;
  }

  const parentIndex = includeSiblings ? '' : `[${getIndexWithinSiblings(element) + 1}]`;
  return getPathTo(element.parentNode, `/${getTagName(element)}${parentIndex}${pathSoFar}`);
}

function getIndexWithinSiblings(element) {
  let index = 0;
  const siblings = element.parentNode.childNodes;
  for (let nodeIndex = 0; nodeIndex < siblings.length; nodeIndex += 1) {
    const sibling = siblings[nodeIndex];
    if (sibling === element) {
      break;
    }
    if (areSameType(element, sibling)) {
      index += 1;
    }
  }
  return index;
}

function areSameType(element, node) {
  return node.nodeType === Node.ELEMENT_NODE && node.tagName === element.tagName;
}

function getTagName(element) {
  return element.tagName.toLowerCase();
}
