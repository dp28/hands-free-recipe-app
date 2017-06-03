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

export function getSpokenCommandStream(getCurrentTextToSpeechTarget) {
  const stream = new Subject();
  const commands = buildCommands(stream);
  annyang.addCommands(commands);

  annyang.start();
  return stream
    .debounce(500)
    .filter(action => action.unmatched !== getCurrentTextToSpeechTarget());
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
    return object;
  }
}

function publishResult(stream) {
  return func => (...args) => stream.onNext(func(...args));
}
