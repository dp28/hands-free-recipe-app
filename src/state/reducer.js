import { FocusReducer } from '../Focus';

export default function reducer(state = {}, action) {
  return FocusReducer(state, action);
}
