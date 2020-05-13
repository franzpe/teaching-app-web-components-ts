import { css, html, customElement } from 'lit-element';

import Component from '../_components/Component';
import store from '../_store';

const styles = css`
  .container {
    display: flex;
    justify-content: center;
  }

  .card {
    min-width: 230px;
    width: 100%;
    max-width: 550px;
    background: #fff;
    position: relative;
    color: rgb(77, 77, 77);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
  }

  .toggle-all {
    text-align: center;
    border: none;
    opacity: 0;
    position: absolute;
  }

  .toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: 14px;
    left: -6px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    z-index: 1;
  }

  .toggle-all:checked + label:before {
    color: #737373;
  }

  .toggle-all + label:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  .new-words,
  .edit {
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    border: 0;
    color: inherit;
    padding: 6px;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .new-words {
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  }

  .footer::before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2),
      0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: #dfdfdf;
    font-style: italic;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #dfdfdf;
    font-style: italic;
  }

  ::placeholder {
    color: #dfdfdf;
    font-style: italic;
  }
`;

interface Props {
  words: string[];
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
  handleSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.target);
    this.dispatch('addWord', formData.get('words'));
  }

  render() {
    const footer = this.props.words.length > 0 ? html`<div class="footer"></div` : ``;

    return html`
      <main class="container">
        <div class="card">
          <form @submit=${this.handleSubmit}>
            <input id="toggle-all" class="toggle-all" type="checkbox" />
            <label for="toggle-all"></label>
            <input id="words" name="words" class="new-words" placeholder="What words do you want to introduce?" />
          </form>
          <ul>
            ${this.props.words.map(word => (word !== '' ? html` <li>${word}</li> ` : ``))}
          </ul>
          ${footer}
        </div>
      </main>
    `;
  }
}
