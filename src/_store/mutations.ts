const addItem = (state, payload) => {
  state.words.push(payload);

  return state;
};

const clearItem = (state, payload) => {
  state.words.splice(payload.index, 1);

  return state;
};

export default { addItem, clearItem };
