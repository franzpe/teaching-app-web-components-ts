import { LitElement, css, html, customElement, property } from 'lit-element';

@customElement('header-el')
export class HeaderEl extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      header {
        padding: 10px 0;
      }
      .container {
        max-width: 1920px;
        margin: 0 auto;
        padding: 0 30px;
      }
      .logo {
        font-size: 2rem;
      }
    `;
  }

  render() {
    return html`
      <header>
        <div class="container">
          <div class="logo">Teaching app</div>
        </div>
      </header>
    `;
  }
}
