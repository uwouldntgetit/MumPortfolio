class TestElement extends HTMLElement {
    constructor (){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="test">
        </div>
        `
    }
}

customElements.define("test-elem", TestElement);