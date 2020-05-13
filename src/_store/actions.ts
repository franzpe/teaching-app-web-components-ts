const addWord = (context, payload) => {
  context.commit('addWord', payload);
};

const removeWord = (context, payload) => {
  context.commit('removeWord', payload);
};

const addHistory = (context, payload) => {
  context.commit('addHistory', payload);
};

export default { addWord, removeWord, addHistory };
