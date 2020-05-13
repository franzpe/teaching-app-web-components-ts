import { ApplicationState } from './state';

const addWord = (state: ApplicationState, payload) => {
  const words = state.words.slice();
  words.push(payload);

  return { ...state, words };
};

const clearWord = (state: ApplicationState, payload) => {
  const words = state.words.slice();
  words.splice(payload.index, 1);

  return { ...state, words };
};

const addHistory = (state: ApplicationState, payload: Array<string>) => {
  const history = state.history.slice();
  history.push(payload);

  return { ...state, history };
};

export default { addWord, clearWord, addHistory };
