import { LitElement, css, html, customElement, property } from 'lit-element';

@customElement('hello-world')
export class HelloWorldElem extends LitElement {
  @property({ type: String }) title: string = 'default title';
  @property({ type: String }) description: string = 'default description';

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

  handleClick = () => {
    console.log('Handle click');
  };

  render() {
    return html`
      <div class="container">
        <h1>${this.title}</h1>
        <h2>whatever this is</h2>
        <h2>whatever this is</h2>
        <h3>this is a h3</h3>
        <p>${this.description}</p>
        <button @click=${this.handleClick}>Whatever</button>
      </div>
    `;
  }
}
