import { css, html, customElement } from 'lit-element';

import Component from '../_components/Component';
import store from '../_store';

@customElement('dashboard-el')
export class DashboardEl extends Component {
  constructor() {
    super({ store });
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
    store.dispatch('addWord', formData.get('words'));
  }

  render() {
    return html`
      <main class="container">
        <form @submit=${this.handleSubmit}>
          <input id="words" name="words"></input>
          <button type="submit">ok</button>
        </form>
        <ul>
          ${store.state.words.map(word => (word !== '' ? html`<li>${word}</li>` : ``))}
        </ul>
      </main>
    `;
  }
}
