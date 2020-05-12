import { LitElement, css, html, customElement, property } from 'lit-element';

@customElement('app-el')
export class App extends LitElement {
  render() {
    return html`
      <div class="app">
        <hello-world title="Hello World!" description="This is my super awesome web component"></hello-world>
      </div>
    `;
  }
}
