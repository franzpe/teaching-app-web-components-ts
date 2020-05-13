export interface ApplicationState {
  words: Array<string>;
  history: Array<Array<string>>;
}

const state: ApplicationState = {
  words: [],
  history: []
};

export default state;
