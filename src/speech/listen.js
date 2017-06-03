import { Subject } from 'rx';
import annyang from 'annyang';

import { nextFocus, previousFocus, changeFocus } from '../components/Focus';
import { unmatchedSpeech } from '../components/Speech';

const CommandsToActions = {
  'next (ingredient)': nextFocus,
  'next (method)': nextFocus,
  'previous (ingredient)': previousFocus,
  'previous (method)': previousFocus,
  'back': previousFocus,
  'how many *ingredient': findIngredientQuantity,
  'how much *ingredient': findIngredientQuantity,
  '*unmatched': unmatchedSpeech,
}

export function getSpokenCommandStream(getState, getCurrentTextToSpeechTarget) {
  const stream = new Subject();
  const commands = buildCommands(stream, getState);
  annyang.addCommands(commands);

  annyang.start();
  return stream
    .debounce(500)
    .filter(action => action.unmatched !== getCurrentTextToSpeechTarget(getState()));
}

function buildCommands(stream, getState) {
  return mapValues(publishResult(stream, getState), CommandsToActions);
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

function publishResult(stream, getState) {
  return func => (...args) => stream.onNext(func(...args, getState));
}

function findIngredientQuantity(ingredientDescription, getState) {
  const { ingredients } = getState().recipe;
  const ingredientIndex = ingredients.findIndex(i => i.match(ingredientDescription));
  if (ingredientIndex !== null && ingredientIndex !== undefined) {
    return changeFocus(['recipe', 'ingredients', ingredientIndex]);
  } else {
    return unmatchedSpeech(ingredientDescription);
  }
}
