"use strict"
/**
 * the problem here is that the html code passed through a string is
 * unaffected by the navbar.css code, but not by other css like the one that
 * selects fonts and governs the code in normalnavbar var.
 * so the ccode actually loads css classes from all files, but it does so 
 * only for some specific classes and atributes.
 */


const hamburgerNavBar = `
        
            <div id="navbar">
                <nav class="navbar-container container">
                    <a onclick="redirectHome()" class="home-link">
                        <div class="navbar-title">Benedetta Vigori</div>
                    </a>
                    <!-- this part is the hamburger -->
                    <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <div id="navbar-menu" aria-labelledby="navbar-toggle">
                        <ul class="navbar-links">
                            <li class="navbar-item"><a class="navbar-link" onclick="redirectAbout()">Informazioni Personali</a></li>
                            <li class="navbar-item"><a class="navbar-link" onclick="redirectServices()">Costi e Servizi</a></li>
                            <li class="navbar-item"><a class="navbar-link" onclick="redirectFaq()">Faq</a></li>
                            <li class="navbar-item"><a class="navbar-link" onclick="redirectContacts()">Contatti</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            `

const normalNavbar = `

                <div class="flex-container general-container">
                    <div class="left-part-navbar navbar-part">
                        <a onclick="redirectAbout()">About</a>
                        <a onclick="redirectServices()">Servizi</a>
                    </div>
                    <div class="main-title-navbar">
                        <a onclick="redirectHome()">BENEDETTA VIGORI</a>
                    </div>
                    <div class="right-part-navbar navbar-part">
                        <a onclick="redirectFaq()">Domande</a>
                        <a>Risorse</a>
                    </div>
                </div>
                    `;

const screenWidthQuery = window.matchMedia("(max-width: 800px)");
/* TODO:
* disable scrolling when navbar-menu is visible
* make navbar-menu less opaque and more readable
* don't have 3 navbar but 2
*/

class Navbar extends HTMLElement {
    constructor() {
        super();
        console.log("ciao")
    }

    connectedCallback() {
        if(screenWidthQuery.matches){
        this.innerHTML = hamburgerNavBar;
        console.log("ciao")
        /* KEEP THIS COMMENT HERE
        * basically i was stuck for     <!-- Contacts -->
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
    </div>three days on this navbar problem and then i came here and noticed that in
        * const navbarToggle = document.getElementById("#navbar-toggle");
        * the string has a '#' before it and thought, "what if i delete it?" . I did it and it worked.
        */
        const navbarToggle = document.getElementById("navbar-toggle");
        const navbarMenu = document.querySelector("#navbar-menu");
        const navbarLinksContainer = document.querySelector(".navbar-links");
        let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

        const toggleNavbarVisibility = () => {
        isNavbarExpanded = !isNavbarExpanded;
        navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
        document.documentElement.style.overflow = isNavbarExpanded ? "hidden" : "scroll";
        document.body.scroll = isNavbarExpanded ? "no" : "yes";
        };

        navbarToggle.addEventListener("click", toggleNavbarVisibility);

        navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
        navbarMenu.addEventListener("click", toggleNavbarVisibility);

        let links = document.getElementsByClassName("navbar-link");


        }
        else{
            this.innerHTML = normalNavbar;
            // document.documentElement.style.overflow = "scroll";
            // document.body.scroll = "yes";
        }
        
    }
}

// this is in preparationn for the transformation of the #navbar-menu elem
const observer = new IntersectionObserver((ent) => {
    ent.forEach((e) => {
        if(e.isIntersecting)
            e.target.classList.toggle("show");
    })
})

// use this tutorial as a base: https://www.aleksandrhovhannisyan.com/blog/responsive-navbar-tutorial/
// i have to understand what this aria-... is in the html code


customElements.define("custom-navbar", Navbar);

function redirectHome(){
    document.location = "/MumPortfolio/index.html";
}

function redirectAbout(){
    document.location = "/MumPortfolio/pages/about.html";
}
function redirectFaq(){
    document.location = "/MumPortfolio/pages/faq.html";
}
function redirectServices(){
    document.location = "/MumPortfolio/pages/services.html";
}