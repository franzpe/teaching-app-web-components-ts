const addWords = (context, payload: { texts: string[] }) => {
  context.commit('addWords', payload);
};

const toggleWordComplete = (context, payload: { index: number }) => {
  context.commit('toggleWordComplete', payload);
};

const toggleWordCompleteAll = context => {
  context.commit('toggleWordCompleteAll');
};

const removeWord = (context, payload: { index: number }) => {
  context.commit('removeWord', payload);
};

const addHistory = (context, payload) => {
  context.commit('addHistory', payload);
};

export default { addWords, removeWord, addHistory, toggleWordComplete, toggleWordCompleteAll };
