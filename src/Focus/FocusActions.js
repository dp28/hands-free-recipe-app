export const NEXT_FOCUS = "NEXT_FOCUS";
export const PREVIOUS_FOCUS = "PREVIOUS_FOCUS";
export const CHANGE_FOCUS = "CHANGE_FOCUS";

export function nextFocus() {
  return { type: NEXT_FOCUS };
}

export function previousFocus() {
  return { type: PREVIOUS_FOCUS };
}

export function changeFocus(focusChain) {
  return { type: CHANGE_FOCUS, focusChain };
}
