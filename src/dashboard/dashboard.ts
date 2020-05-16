import { html, customElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import Component from '../_components/Component';
import store from '../_store';
import { Word } from '../_store/state';

import styles from './dashboard.style';

interface Props {
  words: Word[];
}

@customElement('dashboard-el')
export class DashboardEl extends Component<Props> {
  constructor() {
    super({ store, mapState: state => ({ words: state.words }) });
  }

  static get properties() {
    return {
      input: { type: HTMLInputElement }
    };
  }

  static get styles() {
    return [styles];
  }

  /**
   * Submitting the form
   *
   * @param e - Submit event
   */
  handleSubmit = (e: any) => {
    e.preventDefault();
    const wordsInput = this.shadowRoot?.getElementById('words') as HTMLInputElement;
    const wordsString = wordsInput.value;

    if (wordsString) {
      const words = wordsString.split(',').filter(w => w !== '');
      this.dispatch('addWords', { texts: words });
      wordsInput.value = '';
    }
  };

  /**
   * Toggles word completion
   *
   * @param index
   */
  handleToggleCompletion = (index: number) => e => {
    this.dispatch('toggleWordComplete', { index });
  };

  handleToggleAll = () => {
    this.dispatch('toggleWordCompleteAll');
  };

  /**
   * Removes word from the list
   *
   * @param index
   */
  handleRemove = (index: number) => e => {
    this.dispatch('removeWord', { index });
  };

  render() {
    const footer =
      this.props.words.length > 0
        ? html`<div class="footer"><span>${
            this.props.words.filter(w => !w.isCompleted).length
          } words left</span></div`
        : ``;

    return html`
      <main class="container">
        <div class="card">
          <form @submit=${this.handleSubmit}>
            <input id="toggle-all" class="toggle-all" type="checkbox" @change=${this.handleToggleAll} />
            <label for="toggle-all"></label>
            <input
              id="words"
              name="words"
              class="new-words"
              placeholder="What words do you want to introduce?"
              autocomplete="off"
            />
          </form>
          <ul class="words-list">
            ${this.props.words.map(
              (word, i) =>
                html`
                  <li class=${classMap({ completed: word.isCompleted })}>
                    <div>
                      <input
                        class="toggle"
                        type="checkbox"
                        .checked=${word.isCompleted}
                        @change=${this.handleToggleCompletion(i)}
                      />
                      <label>${word.text}</label>
                      <button class="remove-word" @click=${this.handleRemove(i)}>×</button>
                    </div>
                  </li>
                `
            )}
          </ul>
          ${footer}
        </div>
      </main>
    `;
  }
}
