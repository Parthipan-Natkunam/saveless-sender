import { LitElement, css, html } from 'lit';
import {  customElement, property } from 'lit/decorators';

@customElement('chat-form')
export class ChatForm extends LitElement {

  @property({type:Boolean, reflect: true}) isDisabled = false;

  static get styles() {
    return css`
      form{
        padding: 32px 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 160px;
      }
      form > div {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.30rem;
      }
      label{
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: white;
      }
      input{
        background: transparent;
        border: var(--field-border);
        padding: 14px 12px;
        border-radius: var(--medium-radius);
        outline: none;
        color: var(--primary-text-color);
      }
      input:focus{
        border: 1px solid white;
      }
      input:not(:placeholder-shown):valid{
        border: var(--field-success-border)
      }
      input:not(:placeholder-shown):invalid{
        border: var(--field-error-border);
      }

      button{
        color: white;
        background: var(--primary-text-color);
        height: 50px;
        border: none;
        margin-top: 1rem;
        font-weight: bold;
        font-size: 1rem;
        border-radius: var(--medium-radius);
      }

      button:disabled{
        background: grey;
        opacity: 0.5;
      }
    `;
  }

  constructor() {
    super();
  }

  private _handleSubmit(e){
    e.preventDefault();
    this.isDisabled = true;
    const data = new FormData(e.currentTarget);
    const countryCode = data.get("code");
    const phoneNumber = data.get("phone");
    window.open(`http://wa.me/${countryCode}${phoneNumber}`);
    this.isDisabled = false;
  }



  render() {
    return html`
      <form @submit="${this._handleSubmit}">
        <div>
          <label for="code">Country Code</label>
          <input required type="tel" pattern="[+]([0-9]{2,4})" name="code" placeholder="+91" title="country code starting with a + followed by 2 to 4 numbers"/>
        </div>
        <div>
          <label for="phone">Mobile Number</label>
          <input required type="tel" pattern="[0-9]{10}" name="phone" placeholder="0123456789" title="10 digit mobile number"/>
        </div>
        <button type="submit" ?disabled=${this.isDisabled}>${this.isDisabled ? "Opening WhatsApp" : "Chat >>"}</button>
      </form>
    `;
  }
}
