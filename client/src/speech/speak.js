const speechSynthesis = window.speechSynthesis;

export function stopSpeaking() {
  speechSynthesis.cancel();
}

export function sayImmediately(text) {
  stopSpeaking();
  say(text);
}

export function say(text) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(text));
}

export function canSpeak() {
  return Boolean(speechSynthesis);
}
