import { ApplicationState } from './state';

const addWords = (state: ApplicationState, payload: { texts: string[] }) => {
  const words = state.words.slice();

  payload.texts.forEach(t => words.push({ isCompleted: false, text: t, definition: '' }));

  return { ...state, words };
};

const toggleWordComplete = (state: ApplicationState, paylaod: { index: number }) => {
  const words = state.words.slice();

  words[paylaod.index] = { ...words[paylaod.index], isCompleted: !words[paylaod.index].isCompleted };

  return { ...state, words };
};

const toggleWordCompleteAll = (state: ApplicationState) => {
  const words = state.words.slice();

  const toggleTo = words.findIndex(w => !w.isCompleted) > -1;

  words.forEach(w => (w.isCompleted = toggleTo));

  return { ...state, words };
};

const removeWord = (state: ApplicationState, payload: { index: number }) => {
  const words = state.words.slice();
  words.splice(payload.index, 1);

  return { ...state, words };
};

const archiveWords = (state: ApplicationState) => {
  const history = state.history.slice();
  history.push(state.words);

  return { ...state, history };
};

export default { addWords, removeWord, archiveWords, toggleWordComplete, toggleWordCompleteAll };
