import { LitElement, html, css, customElement } from 'lit-element';

@customElement('footer-el')
export class FooterEl extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      footer {
        padding: 10px 0;
        text-align: center;
      }
    `;
  }

  render() {
    return html`<footer>Applance Solutions s. r. o.</footer>`;
  }
}
