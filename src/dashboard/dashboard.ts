import { LitElement, property, css, html, customElement } from 'lit-element';

@customElement('dashboard-el')
export class DashboardEl extends LitElement {
  @property({ type: String }) words: string = '';

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
    this.words = formData.get('words') as string;
  }

  render() {
    return html`
      <main class="container">
        <form @submit=${this.handleSubmit}>
          <input id="words" name="words"></input>
          <button type="submit">ok</button>
        </form>
        <div>${this.words}</div>
        <ul>
          ${this.words.split(',').map(word => (word !== '' ? html`<li>${word}</li>` : ``))}
        </ul>
      </main>
    `;
  }
}
