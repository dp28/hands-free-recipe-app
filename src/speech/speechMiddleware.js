import { apply, NEXT_FOCUS, PREVIOUS_FOCUS, CHANGE_FOCUS } from '../components/Focus';
import { sayImmediately, canSpeak } from './speak';
import { registerCommandListener } from './listen';

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
