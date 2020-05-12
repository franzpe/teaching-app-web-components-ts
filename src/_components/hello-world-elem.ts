import { LitElement, css, html, customElement, property } from 'lit-element';

@customElement('hello-world')
export class HelloWorldElem extends LitElement {
  @property({ type: String }) title: string = 'default title';
  @property({ type: String }) description: string = 'default description';

  constructor() {
    super();
  }

  static get styles() {
    return css`
      .container {
        opacity: 1;
        padding: 30px;
        text-align: center;
        background: #c8e7fd;
      }
      .container h1 {
        font-size: 50px;
      }
    `;
  }

  render() {
    return html`
      <div class="container">
        <h1>Teaching app</h1>
      </div>
    `;
  }
}
