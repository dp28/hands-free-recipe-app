import { buildFocusChain, apply } from './focusChain';
import { NEXT_FOCUS, PREVIOUS_FOCUS, CHANGE_FOCUS } from './FocusActions';

export function FocusReducer(state, action) {
  const focus = reducer(state, state.ui.focus, action);
  const ui = { ...state.ui, focus };
  return { ...state, ui };
}

const increment = updateFocus(index => index + 1);
const decrement = updateFocus(index => index - 1);

function reducer(fullState, focus = buildFocusChain([]), action) {
  switch(action.type) {
    case NEXT_FOCUS: return increment(focus, fullState);
    case PREVIOUS_FOCUS: return decrement(focus, fullState);
    case CHANGE_FOCUS: return buildFocusChain(action.focusChain);
    default: return focus;
  }
}

function updateFocus(map) {
  return (focus, state) => {
    const newChain = mapLastChainItemIndex(map)(focus.data.fullChain, state);
    return buildFocusChain(newChain, focus.data.currentLevelIndex);
  };
}

function mapLastChainItemIndex(map) {
  return (chain, state) => {
    const [baseChain, last] = splitOffLastItem(chain);
    if (!Number.isInteger(last)) {
      return chain;
    }
    const target = apply(baseChain, state);
    const nextIndex = map(last);
    return nextIndex >= 0 && nextIndex < target.length ? [...baseChain, nextIndex] : chain;
  }
}

function splitOffLastItem(list) {
  if (list.length < 1) {
    return [[], null];
  }
  const lastIndex = list.length - 1;
  return [list.slice(0, lastIndex), list[lastIndex]];
}
