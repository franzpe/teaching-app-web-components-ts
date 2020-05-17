import { LitElement, css, html, customElement } from 'lit-element';

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
      strong {
        font-weight: 400;
        color: #5f5f5f;
      }
    `;
  }

  render() {
    return html`
      <header>
        <div class="container">
          <div class="logo">Je m'appelle Claude</div>
        </div>
      </header>
    `;
  }
}
