import * as firebase from 'firebase';

import { Word } from '../_store/state';

class WordService {
  private _wordsRef: firebase.database.Reference;

  constructor() {
    this._wordsRef = firebase.database().ref('words');
  }

  onWordAdded(callback: (words: Word) => void) {
    this._wordsRef.on('child_added', snapshot => {
      const snapshotVal = snapshot.val();

      callback({ text: snapshot.key!, isCompleted: snapshotVal.isCompleted, definition: snapshotVal.definition });
    });
  }

  onWordChanged(callback: (word: Word) => void) {
    this._wordsRef.on('child_changed', snapshot => {
      const snapshotVal = snapshot.val();

      callback({ text: snapshot.key!, isCompleted: snapshotVal.isCompleted, definition: snapshotVal.definition });
    });
  }

  onWordRemoved(callback: (text: string) => void) {
    this._wordsRef.on('child_removed', snapshot => {
      callback(snapshot.key!);
    });
  }

  async addWords(words: Array<Word>) {
    const updates = {};

    words.forEach(w => {
      updates[w.text] = w;
      delete updates[w.text].text;
    });

    return this._wordsRef.update(updates);
  }

  async updateWords(words: Word[]) {
    const updates = {};

    words.forEach(w => {
      updates[w.text] = w;
      delete updates[w.text].text;
    });

    return this._wordsRef.update(updates);
  }
}

export default WordService;
