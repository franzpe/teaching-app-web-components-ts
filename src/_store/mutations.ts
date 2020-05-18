import { ApplicationState, Word } from './state';

const addWord = (state: ApplicationState, payload: { word: Word }) => {
  const words = state.words.slice();

  words.push(payload.word);

  return { ...state, words: words };
};

const updateWord = (state: ApplicationState, payload: { word: Word }) => {
  const words = state.words.slice();

  const index = words.findIndex(w => w.text === payload.word.text);

  if (index > -1) {
    words[index] = payload.word;
  }

  return { ...state, words };
};

const removeWord = (state: ApplicationState, payload: { text: string }) => {
  const words = state.words.slice();

  const index = words.findIndex(w => w.text === payload.text);

  if (index > -1) {
    words.splice(index, 1);
  }

  return { ...state, words };
};

const archiveWords = (state: ApplicationState) => {
  const history = state.history.slice();
  history.push(state.words);

  return { ...state, history };
};

export default { addWord, updateWord, removeWord, archiveWords };
