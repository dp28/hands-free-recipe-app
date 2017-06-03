import { FocusReducer } from '../components/Focus';
import { SpeechReducer } from '../components/Speech';

export default function reducer(state = {}, action) {
  const newState = FocusReducer(state, action);
  return {
    ...newState,
    speech: SpeechReducer(state.speech, action),
  };
}
