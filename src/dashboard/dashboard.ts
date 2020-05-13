import { css, html, customElement } from 'lit-element';

import Component from '../_components/Component';
import store from '../_store';
import { ApplicationState } from '../_store/state';

interface Props {
  words: string[];
}

const mapState = (state: ApplicationState) => ({
  words: state.words
});

@customElement('dashboard-el')
export class DashboardEl extends Component<Props> {
  constructor() {
    super({ store, mapState });
  }

  static get properties() {
    return {
      input: { type: HTMLInputElement }
    };
  }

  static get styles() {
    return css``;
  }

  /**
   * Submitting the form
   *
   * @param e - Submit event
   */
  handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    this.dispatch('addWord', formData.get('words'));
  }

  handleWhatever() {
    this.dispatch('addHistory', ['WHATEVER']);
  }

  render() {
    return html`
      <main class="container">
        <form @submit=${this.handleSubmit}>
          <input id="words" name="words"></input>
          <button type="submit">ok</button>
        </form>
        <ul>
          ${this.props.words.map(word => (word !== '' ? html`<li>${word}</li>` : ``))}
        </ul>
        <button @click=${this.handleWhatever}>whatever</button>
      </main>
    `;
  }
}
