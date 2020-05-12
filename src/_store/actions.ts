const addWord = (context, payload) => {
  context.commit('addItem', payload);
};

const removeWord = (context, payload) => {
  context.commit('removeWord', payload);
};

export default { addWord, removeWord };
