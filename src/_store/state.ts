export interface Word {
  isCompleted: boolean;
  text: string;
}

export interface ApplicationState {
  words: Array<Word>;
  history: Array<Array<string>>;
}

const state: ApplicationState = {
  words: [],
  history: []
};

export default state;
