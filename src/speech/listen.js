import { Subject } from 'rx';
import annyang from 'annyang';

import { nextFocus, previousFocus } from '../components/Focus';
import { unmatchedSpeech } from '../components/Speech';

const CommandsToActions = {
  'next (ingredient)': nextFocus,
  'next (method)': nextFocus,
  'previous (ingredient)': previousFocus,
  'previous (method)': previousFocus,
  'back': previousFocus,
  '*unmatched': unmatchedSpeech,
}

export function registerCommandListener(dispatchAction) {
  const stream = new Subject();
  const commands = buildCommands(stream);
  annyang.addCommands(commands);

  stream
    .debounce(500)
    .subscribe(dispatchAction);

  annyang.start();
}

function buildCommands(stream) {
  return mapValues(publishResult(stream), CommandsToActions);
}

function mapValues(map, object) {
  return Object.entries(object).reduce(appendMapped(map), {});
}

function appendMapped(map) {
  return (object, [key, value]) => {
    object[key] = map(value);
    console.log(key, value, map, object);
    return object;
  }
}

function publishResult(stream) {
  return func => (...args) => stream.onNext(func(...args));
}
