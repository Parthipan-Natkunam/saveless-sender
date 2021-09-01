import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators';
import '../components/chat-form.ts';

// For more info on the @pwabuilder/pwainstall component click here https://github.com/pwa-builder/pwa-install
import '@pwabuilder/pwainstall';

@customElement('app-home')
export class AppHome extends LitElement {

  static get styles() {
    return css`
      div{
        margin: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      fast-card{
        max-width: 450px;
        background: var(--card-bg-color);
        border-radius: var(--medium-radius);
      }
    `;
  }

  constructor() {
    super();
  }

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <div>
        <fast-card>
          <chat-form/>
        </fast-card>
        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `;
  }
}
