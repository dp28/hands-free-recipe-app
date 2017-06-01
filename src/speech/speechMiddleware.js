import { apply, NEXT_FOCUS, PREVIOUS_FOCUS, CHANGE_FOCUS } from '../components/Focus';

const speechSynthesis = window.speechSynthesis;

const unsafeSpeechMiddleware = store => next => action => {
  const result = next(action);
  performSpeechSideEffect(store.getState(), action);
  return result;
}

export function speechMiddleware(store) {
  if (canSpeak()) {
    return unsafeSpeechMiddleware(store);
  }
  else {
    console.log('Speech synthesis not supported');
    return next => action => next(action);
  }
}

export function performSpeechSideEffect(state, action) {
  if ([NEXT_FOCUS, PREVIOUS_FOCUS, CHANGE_FOCUS].includes(action.type)) {
    cancelCurrentSpeech();
    say(apply(state.ui.focus.data.fullChain, state));
  }
}

function cancelCurrentSpeech() {
  speechSynthesis.cancel();
}

function say(text) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

function canSpeak() {
  return Boolean(speechSynthesis);
}
