import { apply, NEXT_FOCUS, PREVIOUS_FOCUS, CHANGE_FOCUS, nextFocus } from '../components/Focus';

const speechSynthesis = window.speechSynthesis;

const unsafeSpeechMiddleware = store => next => action => {
  const result = next(action);
  performSpeechSideEffect(store.getState(), action);
  return result;
}

export function speechMiddleware(store) {
  if (canSpeak()) {
    registerCommandListener(store.dispatch);
    return unsafeSpeechMiddleware(store);
  }
  else {
    console.log('Speech synthesis not supported');
    return next => action => next(action);
  }
}

export function performSpeechSideEffect(state, action) {
  if ([NEXT_FOCUS, PREVIOUS_FOCUS, CHANGE_FOCUS].includes(action.type)) {
    sayImmediately(apply(state.ui.focus.data.fullChain, state));
  }
}

function cancelCurrentSpeech() {
  speechSynthesis.cancel();
}

function sayImmediately(text) {
  cancelCurrentSpeech();
  say(text);
}

function say(text) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function canSpeak() {
  return Boolean(speechSynthesis);
}

function registerCommandListener(handleCommand) {
  handleCommand(nextFocus());
}
