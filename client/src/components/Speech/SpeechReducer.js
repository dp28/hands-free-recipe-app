import { UNMATCHED_SPEECH } from './SpeechActions';

export function SpeechReducer(state = { unmatched: null }, action) {
  if (action.type === UNMATCHED_SPEECH)
    return { ...state, unmatched: action.unmatched };
  else
    return { ...state, unmatched: null };
}
