import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'Saveless Sender';

  static get styles() {
    return css`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--primary-bg-color);
        color: var(--primary-text-color);
        height: 5em;
        margin-bottom: 30px;
        border-bottom: var(--prime-border);
        position: fixed;
        width: calc(100vw - 32px);
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav {
        width: 9em;
        display: flex;
        justify-content: space-between;
      }

      nav fast-anchor {
        margin-left: 10px;
      }

    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <header>
        <h1>${this.title}</h1>

        <!-- <nav>
          <fast-anchor href="./" appearance="button">Home</fast-anchor>
          <fast-anchor href="./about" appearance="button">About</fast-anchor>
        </nav> -->
      </header>
    `;
  }
}
