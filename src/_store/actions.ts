import WordService from '../_services/wordService';
import { Word } from './state';
import Store from './store';

const onAddWord = (context, payload: { word: Word }) => {
  context.commit('addWord', payload);
};

const onUpdateWord = (context, payload: { word: Word }) => {
  context.commit('updateWord', payload);
};

const onRemoveWord = (context, payload: { text: string }) => {
  context.commit('removeWord', payload);
};

const archiveWords = (context, payload) => {
  context.commit('archiveWords', payload);
};

/**
 * SERVICE ACTIONS
 */
const setupListeners = context => {
  const service = new WordService();
  service.onWordAdded(word => context.dispatch('onAddWord', { word }));
  service.onWordChanged(word => context.dispatch('onUpdateWord', { word }));
  service.onWordRemoved(text => context.dispatch('onRemoveWord', { text }));
};

const postWords = async (context: Store, payload: { texts: string[] }) => {
  const service = new WordService();
  const words: Array<Word> = [];
  payload.texts.forEach(t => words.push({ isCompleted: false, text: t, definition: '' }));
  await service.addWords(words);
};

const toggleWordComplete = (context: Store, payload: { index: number }) => {
  const service = new WordService();
  let word = context.state.words.find((_, i) => i === payload.index);

  if (word) {
    word = { ...word, isCompleted: !word.isCompleted };
    service.updateWords([word]);
  }
};

const toggleWordCompleteAll = (context: Store) => {
  const service = new WordService();
  const words = context.state.words.slice();
  const toggleTo = words.findIndex(w => !w.isCompleted) > -1;
  words.forEach((w, i) => (words[i] = { ...w, isCompleted: toggleTo }));
  service.updateWords(words);
};

const removeWord = (context: Store, payload: { index: number }) => {
  const service = new WordService();
  const word = context.state.words.find((_, i) => i === payload.index);
  service.removeWord(word!.text);
};

export default {
  postWords,
  setupListeners,
  onAddWord,
  onUpdateWord,
  onRemoveWord,
  removeWord,
  archiveWords,
  toggleWordComplete,
  toggleWordCompleteAll
};
