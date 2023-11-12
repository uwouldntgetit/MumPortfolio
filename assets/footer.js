"use strict"

const customFooterInner = `
    <div class="footer">
        <span>
            benedettavigori@gmail.com
        </span>
        <span>
            392-2121-892
        </span>
        <span>
            P.IVA: 04649710169
        </span>
        <span>
            Made by: <a href="www.digitalstorm.site"> Digital Storm</a>
        </span>
    </div>
`


class CustomFooter extends HTMLElement{
    constructor(){
        super()
    }

    conectedCallback(){
        this.innerHTML = customFooterInner;
    }
}

customElements.define("custom-footer", CustomFooter);