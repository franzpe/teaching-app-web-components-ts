export interface Word {
  isCompleted: boolean;
  text: string;
  definition: string;
}

export interface ApplicationState {
  words: Array<Word>;
  history: Array<Array<Word>>;
}

const state: ApplicationState = {
  words: [],
  history: []
};

export default state;
