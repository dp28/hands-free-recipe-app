import { FocusReducer } from '../components/Focus';

export default function reducer(state = {}, action) {
  return FocusReducer(state, action);
}
