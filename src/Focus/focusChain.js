export function buildFocusChain(fullChain, currentLevelIndex = 0) {
  const data = { fullChain, currentLevelIndex };
  return {
    data,
    nestedFocus: buildNestedFocus(data),
    isFocused: isFocused(data),
  };
}

function buildNestedFocus(focus) {
  return (property) => {
    const nextLevelIndex = isFocused(focus)(property) ? focus.currentLevelIndex + 1 : null;
    return buildFocusChain(focus.fullChain, nextLevelIndex);
  };
}

function isFocused({ fullChain, currentLevelIndex }) {
  return property => fullChain[currentLevelIndex] === property;
}
