import { nextFocus } from '../components/Focus';

export function registerCommandListener(handleCommand) {
  handleCommand(nextFocus());
}
