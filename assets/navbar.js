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

const screenWidthQuery = window.matchMedia("(max-width: 900px)");
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
    // there's no connected callback
    connectedCallback() {
        if(screenWidthQuery.matches){
            this.innerHTML = hamburgerNavBar;
            console.log("ciao")
            /* KEEP THIS COMMENT HERE
            * basically i was stuck for three days on this navbar problem and then i came here and noticed that in
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
            };

            navbarToggle.addEventListener("click", toggleNavbarVisibility);

            navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
            navbarMenu.addEventListener("click", toggleNavbarVisibility);
        }
        else{
            this.innerHTML = normalNavbar;
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