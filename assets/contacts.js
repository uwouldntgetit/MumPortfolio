"use strict"

const contactsHTML = `
    <!-- Contacts -->
    <div id="contact-section">
        <h1 id="contacts-title">Contatti</h1>
        <form class="flex-container general-container form-container">
            <div class="basis-half flex-elem">
                Nome
                <input name="first-name" type="text" class="flex-elem" required>
            </div>
            <div class="flex-elem basis-half">
                Cognome
                <input name="last-name" type="text" class="flex-elem" required>
            </div>
            <div class="flex-elem">
                Email
                <input name="email" type="text" class="flex-elem" required>
            </div>
            <div class="flex-elem">
                Oggetto
                <input name="subject" type="text" class="flex-elem" required>
            </div>
            <textarea placeholder="scrivi il messaggio" class="flex-elem" required></textarea>
            <button id="submit-button" type="submit">INVIA</button>
        </form>
    </div>
`

class Contacts extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = contactsHTML;
    }
}


customElements.define("contacts-form", Contacts);
