export const UNMATCHED_SPEECH = 'UNMATCHED_SPEECH';

export function unmatchedSpeech(unmatched) {
  return { type: UNMATCHED_SPEECH, unmatched };
}
