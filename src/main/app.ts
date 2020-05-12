import { LitElement, css, html, customElement } from 'lit-element';

import './header.ts';
import './footer.ts';
import '../dashboard';

@customElement('app-entry')
export class App extends LitElement {
  static get styles() {
    return css`
      .app {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .main-wrapper {
        flex: 1;
      }
    `;
  }

  render() {
    return html`
      <div class="app">
        <header-el></header-el>
        <div class="main-wrapper">
          <dashboard-el></dashboard-el>
        </div>
        <footer-el></footer-el>
      </div>
    `;
  }
}
