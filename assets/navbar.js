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
                <a href="#" class="home-link">
                    <div class="navbar-logo"></div>
                    Benedetta Vigori
                </a>
                <!-- this part is the icon -->
                <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div id="navbar-menu" aria-labelledby="navbar-toggle">
                    <ul class="navbar-links">
                        <li class="navbar-item"><a class="navbar-link" href="/about">About</a></li>
                        <li class="navbar-item"><a class="navbar-link" href="/blog">Blog</a></li>
                        <li class="navbar-item"><a class="navbar-link" href="/careers">Careers</a></li>
                        <li class="navbar-item"><a class="navbar-link" href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        `

const normalNavbar = `

                <div class="flex-container general-container">
                    <div class="left-part-navbar navbar-part">
                        <a href="pages/about.html">About</a>
                        <a>Servizi</a>
                    </div>
                    <div class="main-title-navbar">
                        <a>BENEDETTA VIGORI</a>
                    </div>
                    <div class="right-part-navbar navbar-part">
                        <a>FAQ</a>
                        <a>Risorse</a>
                        <a>Contatti</a>
                    </div>
                </div>
                    `;

const screenWidthQuery = window.matchMedia("(min-width: 900px)");
let check = false;

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        if(!screenWidthQuery.matches){
            this.innerHTML = hamburgerNavBar;
            check = true;
            // if(isNavbarExpanded)
        }
        else{
            this.innerHTML = normalNavbar;
            check = false;
        }
        
    }
}
// i thik the error here is about loading, but i could definitely be wrong
function responsiveNavBar(){
    const navbarToggle = document.getElementById("#navbar-toggle");
    const navbarMenu = document.querySelector("#navbar-menu");
    const navbarLinksContainer = document.querySelector(".navbar-links");
    let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

    const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
    };

    navbarToggle.addEventListener("click", toggleNavbarVisibility);

    navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
    navbarMenu.addEventListener("click", toggleNavbarVisibility);
}

if(check){
    setTimeout(500, responsiveNavBar);
}

// use this tutorial as a base: https://www.aleksandrhovhannisyan.com/blog/responsive-navbar-tutorial/
// i have to understand what this aria-... is in the html code


customElements.define("custom-navbar", Navbar);